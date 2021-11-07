import { MessageEntity } from '../MessageEntity'
import { ICreateMessageDTO } from '../dto/ICreateMessageDTO'
import { io } from 'app'

export class CreateMessagesService {
  async execute(createMessage: ICreateMessageDTO) {
    const messageEntity = MessageEntity()

    const message = await messageEntity.create({
      data: createMessage,
      include: {
        user: true,
        channel: true
      }
    })

    const infoIO = {
      messages: message.messages,
      channel: {
        name: message.channel.name,
        slug: message.channel.slug
      },
      user: {
        name: message.user.name,
        email: message.user.email
      }
    }

    io.emit(`messages-channel-${message.channel.slug}`, infoIO);

    return message
  }
}
