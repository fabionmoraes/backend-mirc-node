import prismaClient from 'prisma'
import { UserEntity } from '../entities/UserEntity'

export class ProfileUserService {
    async execute(user_id: string) {
      const userEntity = UserEntity()
        const user = await userEntity.findFirst({
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
