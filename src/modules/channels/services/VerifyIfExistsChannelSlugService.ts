import { ChannelEntity } from '../entities/ChannelEntity'
import { AppError } from '@config/AppError'

export class VerifyIfExistsChannelSlugService {
    async execute(slug: string): Promise<void> {
      const channelEntity = ChannelEntity()
        const channel = await channelEntity.findFirst({
            where: {
              slug
            }
        })

        if (channel) {
            throw new AppError('Ops! Esse canal já existe.')
        }
    }
}
