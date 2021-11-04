import { AppError } from '@config/AppError'
import { ChannelConnectEntity } from '../entities/ChannelConnectEntity'

export class VerifyIfExistsChannelConnectService {
  async execute(channel_id: string) {
    const channelConnectEntity = ChannelConnectEntity()
    const channel = await channelConnectEntity.findFirst({
      where: {
        id: channel_id
      }
    })

    if (!channel) {
      throw new AppError('Ops! Não existe esse canal para se connectar')
    }
  }
}
