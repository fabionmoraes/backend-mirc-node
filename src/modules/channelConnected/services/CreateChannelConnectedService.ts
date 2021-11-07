import { ChannelConnectEntity } from '../ChannelConnectEntity'

export class CreateChannelConnectedService {
  async execute(user_id: string, channel_id: string) {
    const channelConnectEntity = ChannelConnectEntity()
    const channelConnect = await channelConnectEntity.create({
      data: {
        user_id,
        channel_id
      }
    })

    return channelConnect
  }
}
