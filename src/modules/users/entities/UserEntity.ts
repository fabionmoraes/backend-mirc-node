import prismaClient from 'prisma'

export const UserEntity = () => {
  return prismaClient.user
}
