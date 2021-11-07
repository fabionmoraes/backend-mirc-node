import { ChannelPermissionEntity } from '../ChannelPermissionEntity'
import { ICreateChannelPermissionDTO } from '../dto/ICreateChannelPermissionDTO'

export class CreateChannelPermissionsService {
  async execute(createChannel: ICreateChannelPermissionDTO) {
    const { permissions, channel_id } = createChannel

    const permissionsAlter = permissions ? JSON.stringify(permissions) : ''

    const channelPermissionEntity = ChannelPermissionEntity()

    const channelPermission = await channelPermissionEntity.create({
      data: {
        permissions: permissionsAlter,
        channel_id
      }
    })

    return channelPermission
  }
}
