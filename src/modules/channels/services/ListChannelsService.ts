import prismaClient from 'prisma'

export class ListChannelsService {
  async execute() {
    const channels = await prismaClient.channel.findMany()

    return channels
  }
}
