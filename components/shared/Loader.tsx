import { Player } from '@lottiefiles/react-lottie-player'
import React from 'react'
import loadingAnimation from '../../public/lotties/loader.json'

const Loader = () => {
  return (
    <div className="fixed flex h-full w-full items-center justify-center">
      <div className="w-1/6">
        <Player
          src={loadingAnimation}
          autoplay
          loop
          style={{ height: '100%', width: '100%' }}
        ></Player>
      </div>
    </div>
  )
}

export default Loader
