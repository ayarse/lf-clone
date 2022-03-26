import { Controls, Player } from '@lottiefiles/react-lottie-player'
import React, { useEffect, useState } from 'react'
import { Avatar } from './shared'
import { IconButton, Lottie } from './util'
// import * as LottieJS from '@lottiefiles/lottie-js'
import watermark from '../public/lotties/watermark.json'

type LottiePreviewDetailProps = {
  lottie: Lottie
}

const LottiePreviewDetail = ({ lottie }: LottiePreviewDetailProps) => {
  // Component state
  const player = React.createRef<Player>()
  const [currentAnimation, setCurrentAnimation] = useState<object>()
  const [background, setBackground] = useState('#ffffff')
  const [posX, setPosX] = useState('0')
  const [posY, setPosY] = useState('0')
  const [wmSize, setWmSize] = useState('133')
  const [maxH, setMaxH] = useState(0)
  const [maxW, setmaxW] = useState(0)

  // Load lottie from URL
  // This is used instead of directly setting player prop so that we retain access to the
  // unmodified JSON for later use when editing. If prop is used then raw animation data
  // gets lost because player modifies the data when loading.
  // Probably a side effect of mutable array methods
  useEffect(() => {
    fetch(lottie.assetUrl)
      .then((res) => {
        return res.json()
      })
      .then((json) => {
        setMaxH(json.h - parseInt(wmSize) - 30)
        setmaxW(json.w - parseInt(wmSize) - 30)
        return setCurrentAnimation(json)
      })
  }, [])

  const addWatermark = () => {
    // Create a copy of the initial animation JSON fetched from server to edit
    // instead of directly editing player data because existing animationData
    // is dirty
    const shallowCopy = JSON.parse(JSON.stringify(currentAnimation))

    // Create watermark if it doesn't exist
    if (shallowCopy.layers[0].nm !== 'LF_WATERMARK')
      shallowCopy.layers.unshift(watermark.layers[0])

    // Update watermark size
    shallowCopy.layers[0].ks.s.k[0] = parseInt(wmSize)
    shallowCopy.layers[0].ks.s.k[1] = parseInt(wmSize)

    // Update watermark position
    shallowCopy.layers[0].ks.p.k[0] = parseInt(posX)
    shallowCopy.layers[0].ks.p.k[1] = parseInt(posY)

    // Load modified animation data back into player
    setCurrentAnimation(shallowCopy)
  }

  // Update watermark position when state is changed
  useEffect(() => {
    if (typeof currentAnimation !== 'undefined') addWatermark()
  }, [posX, posY, wmSize])

  // Change player background when background state is changed
  // useEffect(() => {
  //   setPlayerBg(background)
  // }, [background])

  // const setPlayerBg = (color: string) => {
  // player.current?.setState({ background: color })
  // }

  return (
    <>
      <div className="flex items-center p-4">
        <div className="w-10">
          <Avatar url={lottie.user.avatar || undefined} />
        </div>
        <div className="ml-4 text-lf-grey-darker ">{lottie.user.name}</div>
        <div className="flex-1 text-right">
          <IconButton label="Download" icon="download" />{' '}
          <IconButton icon="heart" label={`Like ${lottie.likes ?? 0}`} />
        </div>
      </div>

      <Player
        ref={player}
        src={{ ...currentAnimation }}
        autoplay
        loop
        background={background}
        style={{ height: '100%', width: '100%' }}
      >
        <Controls visible={true} buttons={['play', 'repeat', 'frame']} />
      </Player>

      <div className="grid grid-cols-8 p-6">
        <div className="col-span-5">
          <h3 className="averta-semibold text-xl">{lottie.title}</h3>
          <p className="text-lf-grey-dark">{lottie.description}</p>
        </div>
        <div className="col-span-3">
          <div className="rounded-md bg-lf-grey-lighter p-2 text-sm text-lf-teal-700">
            <div className="">Background Color</div>
            <div className="flex items-center py-2">
              <span
                onClick={() => setBackground('#ffffff')}
                className="mr-2 block aspect-square cursor-pointer rounded-full border border-lf-grey bg-white p-2"
              ></span>
              <span
                onClick={() => setBackground('#f87171')}
                className="mr-2 block aspect-square cursor-pointer rounded-full bg-red-400 p-2"
              ></span>
              <span
                onClick={() => setBackground('#0fccce')}
                className="mr-2 block aspect-square cursor-pointer rounded-full bg-lf-teal p-2"
              ></span>
              <span
                onClick={() => setBackground('#3b82f6')}
                className="mr-2 block aspect-square cursor-pointer rounded-full bg-blue-500 p-2"
              ></span>
              <span
                onClick={() => setBackground('#4ade80')}
                className="mr-2 block aspect-square cursor-pointer rounded-full bg-green-400 p-2"
              ></span>
              <input
                type="text"
                name="color"
                onChange={(e) => setBackground(e.target.value)}
                className="w-1/2 p-1"
                value={background}
              />
            </div>
          </div>
          <div className="mt-5 rounded-md bg-lf-grey-lighter p-2 py-4">
            <a
              onClick={addWatermark}
              className="mx-auto block cursor-pointer rounded-md border border-lf-teal px-4 py-2 text-center text-sm text-lf-teal-700 transition-all hover:bg-lf-teal-500 hover:text-white"
            >
              Add Watermark
            </a>
            <div className="mt-4">
              <div className="flex items-center">
                <label
                  className="w-1/6 text-center text-xs text-lf-grey-darker"
                  htmlFor="watermarkPosY"
                >
                  X Pos
                </label>
                <input
                  type="range"
                  value={posX}
                  min="0"
                  max={maxW}
                  onChange={(e) => setPosX(e.target.value)}
                  className="m-2 inline-block w-5/6"
                  name="watermarkPosX"
                  id=""
                />
              </div>
              <div className="flex items-center">
                <label
                  className="w-1/6 text-center text-xs text-lf-grey-darker"
                  htmlFor="watermarkPosY"
                >
                  Y Pos
                </label>
                <input
                  type="range"
                  value={posY}
                  min="0"
                  max={maxH}
                  onChange={(e) => setPosY(e.target.value)}
                  className="m-2 inline-block w-5/6"
                  name="watermarkPosY"
                  id=""
                />
              </div>
              <div>
                <label
                  className="text-center text-xs text-lf-grey-darker"
                  htmlFor="watermarkPosY"
                >
                  Watermark Size
                </label>
                <input
                  type="range"
                  min="50"
                  max="1000"
                  value={wmSize}
                  onChange={(e) => setWmSize(e.target.value)}
                  className=" w-full"
                  name="watermarkPosY"
                  id=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default LottiePreviewDetail
