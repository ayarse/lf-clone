import { Prisma } from "@prisma/client"

const rand = (n: number) => Math.floor(Math.random() * n)

export const lotties: Prisma.LottieCreateManyInput[] = [
    {
        userId: 1,
        assetUrl: 'https://assets2.lottiefiles.com/packages/lf20_qsrqwtwr.json',
        downloads: rand(100),
        likes: rand(100),
        title: 'Sample title',
        description: 'Sample description',
    },
    {
        userId: 1,
        assetUrl: 'https://assets5.lottiefiles.com/packages/lf20_xim69oha.json',
        downloads: rand(100),
        likes: rand(100),
        title: 'Test Raffle',
        description: 'test',
    },
    {
        userId: 1,
        assetUrl: 'https://assets5.lottiefiles.com/packages/lf20_dsopa1mi.json',
        downloads: rand(100),
        likes: rand(100),
        title: 'Test',
        description: 'Test',
    },
    {
        userId: 1,
        assetUrl: 'https://assets5.lottiefiles.com/packages/lf20_l11so9rv.json',
        downloads: rand(100),
        likes: rand(100),
        title: 'Testing',
        description: 'Test',
    },
    {
        userId: 1,
        assetUrl: 'https://assets5.lottiefiles.com/packages/lf20_w6v4gptz.json',
        downloads: rand(100),
        likes: rand(100),
        title: 'Test Load',
        description: 'Test',
    },
]