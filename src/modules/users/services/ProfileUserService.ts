import prismaClient from 'prisma'

export class ProfileUserService {
    async execute(user_id: string) {
        const user = await prismaClient.user.findFirst({
            where: {
                id: user_id,
            }
        })

        if (!user) {
          return {}
        }

        const { password, ...result } = user

        return result
    }
}
