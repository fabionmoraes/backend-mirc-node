import { io } from 'app'

import { ChannelConnectEntity } from '../ChannelConnectEntity'
import { ICreateChannelConnectedDTO } from '../dto/ICreateChannelConnectedDTO'

export class CreateChannelConnectedService {
  async execute(createChannelConnected: ICreateChannelConnectedDTO) {
    const channelConnectEntity = ChannelConnectEntity()
    const channelConnect = await channelConnectEntity.create({
      data: createChannelConnected,
      include: {
        channel: true,
        user: true
      }
    })

    const user = channelConnect.user

    io.emit(`channel-connect-${channelConnect.channel.slug}`, user);

    return channelConnect
  }
}
