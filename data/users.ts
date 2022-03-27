import { Prisma } from "@prisma/client"

export const users: Prisma.UserCreateManyInput[] = [
    {
        name: "Lottiefiles",
        avatar: "/profiles/lf.jpeg"
    },
    {
        name: "Ayas Nasih"

    },
    {
        name: "Bruce Wayne",
        avatar: "/profiles/batman.jpeg"
    },
    {
        name: "Clark Kent",
        avatar: "/profiles/superman.jpeg"
    },
    {
        name: "Barry Allen",
        avatar: "/profiles/flash.png"
    },
    {
        name: "Diana Prince",
        avatar: "/profiles/wonderwoman.png"
    },
]