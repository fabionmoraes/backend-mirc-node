import { ChannelConnectEntity } from '../ChannelConnectEntity'

export class MyAssocieteChannelConnectedService {
  async execute(user_id: string) {
    const channelConnectEntity = ChannelConnectEntity()

    const myChannelConnectEntity = await channelConnectEntity.findMany({
      where: {
        user_id
      },
      include: {
        channel: true
      }
    })

    return myChannelConnectEntity
  }
}
