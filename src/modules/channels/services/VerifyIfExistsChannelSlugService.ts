import prismaClient from 'prisma'
import { AppError } from '@config/AppError'

export class VerifyIfExistsChannelSlugService {
    async execute(slug: string): Promise<void> {
        const channel = await prismaClient.channel.findFirst({
            where: {
              slug
            }
        })

        if (channel) {
            throw new AppError('Ops! Esse canal já existe.')
        }
    }
}
