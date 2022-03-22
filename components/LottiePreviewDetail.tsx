import { Controls, Player } from '@lottiefiles/react-lottie-player'
import React from 'react'
import Avatar from './shared/Avatar'
import IconButton from './util/IconButton'

type LottiePreviewDetailProps = {
  src: string
}

const LottiePreviewDetail = ({ src }: LottiePreviewDetailProps) => {
  return (
    <div className="">
      <div className="flex items-center p-4">
        <div className="w-10">
          <Avatar />
        </div>
        <div className="text-grey-darker ml-4 ">Anant Mishra</div>
        <div className="flex-1 text-right">
          <IconButton label="Download" icon="download" />{' '}
          <IconButton icon="heart" label="Like" />
        </div>
      </div>
      <Player autoplay loop src={src} style={{ height: '100%', width: '100%' }}>
        <Controls visible={true} buttons={['play', 'repeat', 'frame']} />
      </Player>
      <div className="grid grid-cols-8 p-6">
        <div className="col-span-5">
          <h3 className="averta-semibold text-xl">Title</h3>
          <p className="text-grey-dark">Description</p>
        </div>
        <div className="col-span-3">Controls</div>
      </div>
    </div>
  )
}

export default LottiePreviewDetail
