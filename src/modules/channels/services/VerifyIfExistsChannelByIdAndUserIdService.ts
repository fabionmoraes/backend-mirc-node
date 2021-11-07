import { ChannelEntity } from '../ChannelEntity'
import { AppError } from '@config/AppError'

export class VerifyIfExistsChannelByIdAndUserIdService {
    async execute(user_id: string, id: string): Promise<void> {
      const channelEntity = ChannelEntity()
        const channelVerify = await channelEntity.findFirst({
            where: {
                id,
                user_id
            }
        })

        if (!channelVerify) {
            throw new AppError('Ops! Esse usuário não é dono do canal.')
        }
    }
}
