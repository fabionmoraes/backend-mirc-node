import prismaClient from 'prisma'

export const MessageEntity = () => {
  return prismaClient.message
}
