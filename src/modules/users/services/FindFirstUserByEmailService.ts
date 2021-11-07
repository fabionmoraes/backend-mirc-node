import { UserEntity } from '../UserEntity'

export class FindFirstUserByEmailService {
    async execute(email: string) {
      const userEntity = UserEntity()
        const user = await userEntity.findFirst({
            where: {
                email
            }
        })

        return user
    }
}
