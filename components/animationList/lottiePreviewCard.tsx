import { Player } from '@lottiefiles/react-lottie-player'
import { useState } from 'react'
import LottiePreviewDetail from '../LottiePreviewDetail'
import Avatar from '../shared/Avatar'
import { DownloadIcon } from '../util/Icons'
import { Modal } from '../util/Modal'

type LottiePreviewCardProps = {
  lottie: string
  authorAvatar?: string
  authorName: string
  downloads: number
}

const LottiePreviewCard = ({
  lottie,
  authorAvatar,
  authorName,
  downloads,
}: LottiePreviewCardProps) => {
  const [openPreview, setOpenPreview] = useState(false)
  const closeModal = () => {
    setOpenPreview(false)
  }
  return (
    <div className="p-3">
      <div
        onClick={() => setOpenPreview(true)}
        className="aspect-square w-full rounded-md bg-white p-2 shadow-md hover:cursor-pointer"
      >
        <Player
          autoplay
          loop
          src={lottie}
          style={{ height: '100%', width: '100%' }}
        ></Player>
      </div>
      <Modal open={openPreview} close={closeModal}>
        <LottiePreviewDetail src={lottie} />
      </Modal>
      <div className="flex justify-between p-3">
        <div className="flex items-center">
          <div className="w-7 rounded-full bg-lf-teal">
            <Avatar url={authorAvatar} />
          </div>
          <div className="text-grey-darkest ml-2 text-sm">{authorName}</div>
        </div>
        <div className="text-grey-darkest ml-2 align-middle text-sm">
          <DownloadIcon fill="#8E8E8E" height="10" width="9" />
          {downloads}
        </div>
      </div>
    </div>
  )
}

LottiePreviewCard.defaultProps = {
  downloads: 0,
}

export default LottiePreviewCard
