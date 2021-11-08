import prismaClient from 'prisma'

export const ChannelUserPermissionEntity = () => {
  return prismaClient.channelUserPermission
}
