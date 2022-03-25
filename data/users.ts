import { Prisma } from "@prisma/client"

export const users: Prisma.UserCreateManyInput[] = [
    {
        name: "Lottiefiles",
        avatar: "/public/profiles/lf.jpeg"
    },
    {
        name: "Ayas Nasih"

    },
    {
        name: "Bruce Wayne",
        avatar: "/public/profiles/batman.jpeg"
    },
    {
        name: "Clark Kent",
        avatar: "/public/profiles/superman.jpeg"
    },
    {
        name: "Barry Allen",
        avatar: "/public/profiles/flash.png"
    },
    {
        name: "Diana Prince",
        avatar: "/public/profiles/wonderwoman.png"
    },
]