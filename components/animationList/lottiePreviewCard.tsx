import { Player } from '@lottiefiles/react-lottie-player'
import Avatar from '../shared/Avatar'

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
          <svg
            className="mx-2 inline-block"
            width="9"
            height="10"
            viewBox="0 0 9 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M4.5 7.9277L7.71019 4.78885L6.91481 4.01115L5.0625 5.8223V0H3.9375V5.8223L2.08519 4.01115L1.28981 4.78885L4.5 7.9277ZM9 7.8H7.875V8.9H1.125V7.8H0V8.9C0 9.5061 0.504562 10 1.125 10H7.875C8.496 10 9 9.5061 9 8.9V7.8Z"
              fill="#8E8E8E"
            />
          </svg>
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
