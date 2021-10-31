import prismaClient from 'prisma'

export class FindFirstUserByUserNameService {
    async execute(username: string) {
        const user = await prismaClient.user.findFirst({
            where: {
                username
            }
        })

        return user
    }
}