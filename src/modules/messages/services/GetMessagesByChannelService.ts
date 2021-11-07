import { MessageEntity } from '../MessageEntity'

export class GetMessagesByChannelService {
  async execute(channel_id: string) {
    const messageEntity = MessageEntity()

    const messages = await messageEntity.findMany({
      where: {
        channel_id
      }
    })

    return messages
  }
}
