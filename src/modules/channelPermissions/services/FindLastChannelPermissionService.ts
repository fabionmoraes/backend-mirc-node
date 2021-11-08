import { ChannelPermissionEntity } from '../ChannelPermissionEntity'
import { IFindLastChannelPermissionDTO } from '../dto/IFindLastChannelPermissionDTO'

export class FindLastChannelPermissionService {
  async execute(findLastChannelPermission: IFindLastChannelPermissionDTO) {
    const { channel_id } = findLastChannelPermission

    const channelPermissionEntity = ChannelPermissionEntity()

    const channelPermission = await channelPermissionEntity.findFirst({
      where: {
        channel_id
      }
    })

    return channelPermission
  }
}
