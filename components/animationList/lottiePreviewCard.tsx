import { Player } from '@lottiefiles/react-lottie-player'
import { useState } from 'react'
import LottiePreviewDetail from '../LottiePreviewDetail'
import { Avatar } from '../shared'
import { DownloadIcon, Lottie, Modal } from '../util'

type LottiePreviewCardProps = {
  lottie: Lottie
}

const LottiePreviewCard = ({ lottie }: LottiePreviewCardProps) => {
  const [openPreview, setOpenPreview] = useState(false)
  const openModal = () => {
    setOpenPreview(true)
    document.body.classList.add('h-full', 'overflow-hidden')
  }
  const closeModal = () => {
    setOpenPreview(false)
    document.body.classList.remove('h-full', 'overflow-hidden')
  }
  return (
    <div className="p-3">
      <div
        onClick={openModal}
        className="flex aspect-square w-full items-center rounded-md bg-white p-2 shadow-md hover:cursor-pointer"
      >
        <Player
          autoplay
          loop
          src={lottie.assetUrl}
          style={{ height: '100%', width: '100%' }}
        ></Player>
      </div>
      <Modal open={openPreview} close={closeModal}>
        <LottiePreviewDetail lottie={lottie} />
      </Modal>
      <div className="flex justify-between p-3">
        <div className="flex items-center">
          <div className="w-7 rounded-full bg-lf-teal">
            <Avatar url={lottie.user.avatar || undefined} />
          </div>
          <div className="text-lf-grey-darkest ml-2 text-sm">
            {lottie.user.name}
          </div>
        </div>
        <div className="text-lf-grey-darkest ml-2 align-middle text-sm">
          <DownloadIcon fill="#8E8E8E" height="10" width="9" />
          {lottie.downloads}
        </div>
      </div>
    </div>
  )
}

export default LottiePreviewCard
