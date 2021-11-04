import { ChannelEntity } from '../entities/ChannelEntity'

export class MyChannelService {
  async execute(user_id: string) {
    const channel = ChannelEntity()
    const myChannel = await channel.findFirst({
      where: {
        user_id
      }
    })

    return myChannel
  }
}
