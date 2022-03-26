export type LottieAuthor = {
    name: string,
    avatar?: string,
}

export type Lottie = {
    id: number
    user: LottieAuthor
    assetUrl: string
    downloads: string
    likes: string
    title: string
    description: string
    createdAt: string
}