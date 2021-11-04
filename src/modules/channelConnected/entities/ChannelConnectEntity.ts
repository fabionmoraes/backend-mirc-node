import prismaClient from "prisma"

export const ChannelConnectEntity = () => {
  return prismaClient.channelConnect
}
