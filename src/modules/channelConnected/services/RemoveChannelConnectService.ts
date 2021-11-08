import { ChannelConnectEntity } from '../ChannelConnectEntity'
import { IDeleteChannelConnectDTO } from '../dto/IDeleteChannelConnectDTO'

export class RemoveChannelConnectService {
  async execute(channelConnect: IDeleteChannelConnectDTO) {
    const { channel_connect_id } = channelConnect

    const channelConnectEntity = ChannelConnectEntity()

    await channelConnectEntity.delete({
      where: {
        id: channel_connect_id,
      }
    })
  }
}
