import { ChannelEntity } from '../entities/ChannelEntity'
import { IAlterAccessChannelDTO } from '../dto/IAlterAccessChannelDTO';

export class AlterAccessChannelService {
    async execute(data: IAlterAccessChannelDTO) {
      const channelEntity = ChannelEntity()
        const { id, access } = data

        const channel = await channelEntity.update({
            data: {
                access
            },
            where: {
              id
            }
        })

        return channel
    }
}
