import { ChannelEntity } from '../entities/ChannelEntity'
import { ICreateChannelDTO } from '../dto/ICreateChannelDTO';

export class CreateChannelService {
    async execute(createChannelDto: ICreateChannelDTO) {
      const channelEntity = ChannelEntity()
        const channel = await channelEntity.create({
            data: createChannelDto,
            include: {
                user: true
            }
        })

        return channel
    }
}
