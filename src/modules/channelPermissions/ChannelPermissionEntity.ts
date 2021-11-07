import prismaClient from 'prisma'

export const ChannelPermissionEntity = () => {
  return prismaClient.channelPermission
}
