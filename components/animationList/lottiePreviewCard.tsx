import { Player } from '@lottiefiles/react-lottie-player'
import Avatar from '../shared/Avatar'
import { DownloadIcon } from '../util/Icons'

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
  return (
    <div className="p-3">
      <div className="aspect-square w-full rounded-md bg-white p-2 shadow-md">
        <Player
          autoplay
          loop
          src={lottie}
          style={{ height: '100%', width: '100%' }}
        ></Player>
      </div>
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
