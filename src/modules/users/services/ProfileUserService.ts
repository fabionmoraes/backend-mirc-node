import prismaClient from 'prisma'

export class ProfileUserService {
    async execute(user_id: string) {
        const user = await prismaClient.user.findFirst({
            where: {
                id: user_id
            }
        })

        delete user.password

        return user
    }
}