import { ChannelEntity } from '../ChannelEntity'

export class ShowChannelBySlugService {
  async execute(slug: string) {
    const channelEntity = ChannelEntity()
    const channel = await channelEntity.findFirst({
      where: {
        slug
      }
    })

    return channel
  }
}
