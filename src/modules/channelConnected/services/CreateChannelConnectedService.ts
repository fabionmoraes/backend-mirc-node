import { ChannelConnectEntity } from '../ChannelConnectEntity'
import { ICreateChannelConnectedDTO } from '../dto/ICreateChannelConnectedDTO'

export class CreateChannelConnectedService {
  async execute(createChannelConnected: ICreateChannelConnectedDTO) {
    const channelConnectEntity = ChannelConnectEntity()
    const channelConnect = await channelConnectEntity.create({
      data: createChannelConnected
    })

    return channelConnect
  }
}
