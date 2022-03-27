import { Lottie as L, User } from "@prisma/client"

export type LottieAuthor = {
    name: string,
    avatar?: string,
}

export type Lottie = L & {
    user?: User
}