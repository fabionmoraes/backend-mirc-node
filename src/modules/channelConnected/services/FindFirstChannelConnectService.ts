import { AppError } from '@config/AppError';
import { ChannelConnectEntity } from '../ChannelConnectEntity'
import { IFindFirstChannelConnectDTO } from "../dto/IFindFirstChannelConnectDTO";

export class FindFirstChannelConnectService {
  async execute(findFirst: IFindFirstChannelConnectDTO) {
    const { user_id, channel_id } = findFirst

    const channelConnectEntity = ChannelConnectEntity()
    const result = await channelConnectEntity.findFirst({
      where: {
        user_id,
        channel_id
      }
    })

    if (!result) {
      throw new AppError('Ops! Canal ou usuário não encontrado.')
    }

    return result
  }
}
