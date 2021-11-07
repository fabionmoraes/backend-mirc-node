import { AppError } from '@config/AppError'
import { ChannelEntity } from '../ChannelEntity'

export class VerifyIfExistsChannelByIdService {
  async execute(channel_id: string) {
    const channelEntity = ChannelEntity()
    const channel = await channelEntity.findFirst({
      where: {
        id: channel_id
      }
    })

    if (!channel) {
      throw new AppError('Ops! O canal não existe.', 403)
    }
  }
}
