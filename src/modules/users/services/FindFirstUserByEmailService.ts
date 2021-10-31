import prismaClient from 'prisma'

export class FindFirstUserByEmailService {
    async execute(email: string) {
        const user = await prismaClient.user.findFirst({
            where: {
                email
            }
        })

        return user
    }
}