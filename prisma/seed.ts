import { user } from './seed/user'
import bcrypt from 'bcrypt'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
    const salt = await bcrypt.genSalt();
    const password = await bcrypt.hash(user.password, salt);
    await prisma.user.create({
        data: {
            ...user,
            password
        }
    })
}

main().catch(e => {
    console.error(e)
    process.exit(1)
}).finally(async () => {
    await prisma.$disconnect()
})