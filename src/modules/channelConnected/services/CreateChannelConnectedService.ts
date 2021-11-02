import prismaClient from 'prisma'

export class CreateChannelConnectedService {
  async execute(user_id: string, channel_id: string) {

    const channelConnect = await prismaClient.channelConnect.create({
      data: {
        user_id,
        channel_id
      }
    })

    return channelConnect
  }
}
