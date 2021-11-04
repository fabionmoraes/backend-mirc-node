import { ChannelEntity } from '../entities/ChannelEntity'

export class ListChannelsService {
  async execute() {
    const channelEntity = ChannelEntity()
    const channels = await channelEntity.findMany()

    return channels
  }
}
