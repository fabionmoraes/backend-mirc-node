import prismaClient from 'prisma'
import { AppError } from '@config/AppError'

export class VerifyIfExistsChannelSlugAndUserId {
    async execute(user_id: string, slug: string): Promise<void> {
        const channelVerify = await prismaClient.channel.findFirst({
            where: {
                slug,
                user_id
            }
        })

        if (!channelVerify) {
            throw new AppError('Ops! Esse usuário não é dono do canal.')
        }
    }
}