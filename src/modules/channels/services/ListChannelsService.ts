import { ChannelEntity } from '../ChannelEntity'

export class ListChannelsService {
  async execute() {
    const channelEntity = ChannelEntity()
    const channels = await channelEntity.findMany()

    return channels
  }
}
