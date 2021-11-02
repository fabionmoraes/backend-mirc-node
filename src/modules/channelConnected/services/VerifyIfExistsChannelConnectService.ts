import { AppError } from '@config/AppError'
import prismaClient from 'prisma'

export class VerifyIfExistsChannelConnectService {
  async execute(channel_id: string) {
    const channel = await prismaClient.channelConnect.findFirst({
      where: {
        id: channel_id
      }
    })

    if (!channel) {
      throw new AppError('Ops! Não existe esse canal para se connectar')
    }
  }
}
