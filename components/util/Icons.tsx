import React from 'react'

type IconProps = {
  width?: string
  height?: string
  fill?: string
  stroke?: string
  className?: string
}

export const DownloadIcon = (props: IconProps) => {
  return (
    <svg
      className="mx-2 -mt-1 inline-block"
      width={props.width}
      height={props.height}
      viewBox="0 0 9 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4.5 7.9277L7.71019 4.78885L6.91481 4.01115L5.0625 5.8223V0H3.9375V5.8223L2.08519 4.01115L1.28981 4.78885L4.5 7.9277ZM9 7.8H7.875V8.9H1.125V7.8H0V8.9C0 9.5061 0.504562 10 1.125 10H7.875C8.496 10 9 9.5061 9 8.9V7.8Z"
        fill={props.fill}
      />
    </svg>
  )
}

export const HeartIcon = (props: IconProps) => {
  return (
    <svg
      viewBox="0 0 19 17"
      xmlns="http://www.w3.org/2000/svg"
      className="mx-2 -mt-1 inline-block"
      width={props.width}
      height={props.height}
    >
      <path
        d="M9.514 16h0a.292.292 0 01-.205-.083c-.054-.054-5.406-5.384-6.592-6.445-2.57-2.3-1.831-5.377-.524-6.732C3.31 1.586 4.554 1 5.895 1c1.48 0 2.818.863 3.605 2.288C10.29 1.863 11.637 1 13.132 1c1.34 0 2.621.602 3.703 1.742 1.28 1.347 1.998 4.417-.522 6.728-1.174 1.075-6.54 6.394-6.594 6.447a.292.292 0 01-.205.083"
        fillRule="nonzero"
        stroke={props.stroke}
        strokeWidth="2"
        fill={props.fill}
      />
    </svg>
  )
}

export const RightArrowIcon = (props: IconProps) => {
  return (
    <svg
      className="mx-3 inline"
      width={props.width}
      height={props.height}
      viewBox={`0 0 ${props.width} ${props.height}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1.78244 7.87228H11.6096L7.75314 11.7287C7.44494 12.0369 7.44494 12.5427 7.75314 12.8509C8.06134 13.1591 8.5592 13.1591 8.8674 12.8509L14.0752 7.64311C14.3834 7.33491 14.3834 6.83705 14.0752 6.52885L8.8753 1.31317C8.72766 1.16519 8.52721 1.08203 8.31817 1.08203C8.10914 1.08203 7.90869 1.16519 7.76104 1.31317C7.45285 1.62137 7.45285 2.11923 7.76104 2.42743L11.6096 6.29177H1.78244C1.3478 6.29177 0.992188 6.64739 0.992188 7.08203C0.992188 7.51667 1.3478 7.87228 1.78244 7.87228Z"
        fill={props.fill}
      ></path>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.58421 1.13645C7.77874 0.941555 8.0428 0.832031 8.31817 0.832031C8.59361 0.832031 8.85773 0.941609 9.05228 1.13659L14.252 6.35207C14.6577 6.75791 14.6577 7.41409 14.252 7.81988L9.04418 13.0277C8.63835 13.4335 7.9822 13.4335 7.57636 13.0277C7.17054 12.6218 7.17054 11.9578 7.57636 11.5519L11.006 8.12228H1.78244C1.20973 8.12228 0.742188 7.65474 0.742188 7.08203C0.742188 6.50931 1.20973 6.04177 1.78244 6.04177H11.0078L7.58427 2.6042C7.17856 2.19838 7.17847 1.54225 7.58421 1.13645ZM8.31817 1.33203C8.17554 1.33203 8.03876 1.38878 7.93802 1.48975C7.72745 1.70031 7.72725 2.04008 7.93782 2.25065L12.2114 6.54177H1.78244C1.48587 6.54177 1.24219 6.78546 1.24219 7.08203C1.24219 7.37859 1.48587 7.62228 1.78244 7.62228H12.2131L7.92992 11.9055C7.71935 12.1161 7.71935 12.4635 7.92992 12.6741C8.14049 12.8847 8.48006 12.8847 8.69062 12.6741L13.8984 7.46633C14.109 7.25576 14.109 6.91619 13.8984 6.70562L8.69833 1.48975C8.59759 1.38882 8.46078 1.33203 8.31817 1.33203Z"
        fill={props.fill}
      ></path>
    </svg>
  )
}

export const ChevronDownIcon = (props: IconProps) => {
  return (
    <svg
      data-v-57a3d841=""
      fill="currentColor"
      viewBox="0 0 20 20"
      className={`-mr-2 inline-block w-5 ${props.className}`}
    >
      <path
        data-v-57a3d841=""
        fillRule="evenodd"
        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
        clipRule="evenodd"
      ></path>
    </svg>
  )
}

export const CloseIcon = (props: IconProps) => {
  return (
    <svg viewBox="0 0 40 39" xmlns="http://www.w3.org/2000/svg">
      <path
        className={`${props.className}`}
        d="M40 3.937L35.962 0 20 15.563 4.038 0 0 3.937 15.962 19.5 0 35.063 4.038 39 20 23.437 35.962 39 40 35.063 24.038 19.5z"
        fill={props.fill}
      />
    </svg>
  )
}
