import prismaClient from 'prisma'

export class ShowChannelBySlugService {
  async execute(slug: string) {
    const channel = await prismaClient.channel.findFirst({
      where: {
        slug
      }
    })

    return channel
  }
}
