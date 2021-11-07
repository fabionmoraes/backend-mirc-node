import { ChannelEntity } from '../ChannelEntity'

export class MyChannelsService {
  async execute(user_id: string) {
    const channel = ChannelEntity()
    const myChannels = await channel.findMany({
      where: {
        user_id
      }
    })

    return myChannels
  }
}
