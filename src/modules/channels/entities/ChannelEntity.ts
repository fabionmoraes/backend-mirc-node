import prismaClient from 'prisma'

export const ChannelEntity = () => {
  return prismaClient.channel
}
