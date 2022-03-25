import { PrismaClient } from '@prisma/client'
import { lotties } from '../data/lotties'
import { users } from '../data/users'

const prisma = new PrismaClient()

async function main() {
    await prisma.user.createMany({
        data: users
    })
    await prisma.lottie.createMany({
        data: lotties
    })
}

main().catch(e => {
    console.error(e)
    process.exit(1)
}).finally(async () => {
    await prisma.$disconnect();
})