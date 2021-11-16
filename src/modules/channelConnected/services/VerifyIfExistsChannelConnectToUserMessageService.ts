import { AppError } from '@config/AppError'
import { ChannelConnectEntity } from '../ChannelConnectEntity'

export class VerifyIfExistsChannelConnectToUserMessageService {
  async execute(channel_id: string, user_id: string) {
    const channelConnectEntity = ChannelConnectEntity()
    const channel = await channelConnectEntity.findFirst({
      where: {
        channel_id,
        user_id
      }
    })

    if (!channel) {
      throw new AppError('Ops! Canal não conectado', 403)
    }
  }
}
