import { ChannelPermissionEntity } from '../ChannelPermissionEntity'
import { ICreateChannelPermissionDTO } from '../dto/ICreateChannelPermissionDTO'
import { convertPermissions } from '@shared/utils'

export class CreateChannelPermissionsService {
  async execute(createChannel: ICreateChannelPermissionDTO) {
    const { permissions, channel_id } = createChannel

    const permissionsArray = convertPermissions(permissions)

    const permissionsAlter = permissions ? JSON.stringify(permissionsArray) : ''

    const channelPermissionEntity = ChannelPermissionEntity()

    let channelPermission = await channelPermissionEntity.create({
      data: {
        permissions: permissionsAlter,
        channel_id
      }
    })

    if (channelPermission) {
      const permissions = channelPermission.permissions
      channelPermission.permissions = permissions ? JSON.parse(permissions) : []
    }

    return channelPermission
  }
}
