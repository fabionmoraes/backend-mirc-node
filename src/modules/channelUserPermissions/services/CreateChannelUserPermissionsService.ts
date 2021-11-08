import { convertPermissions } from '@shared/utils'
import { ChannelUserPermissionEntity } from '../ChannelUserPermissionEntity'
import { ICreateChannelUserPermissionDTO } from '../dto/ICreateChannelUserPermissionDTO'

export class CreateChannelUserPermissionsService {
  async execute(createChannelUserPermission: ICreateChannelUserPermissionDTO) {
    const { permissions } = createChannelUserPermission

    const channelUserPermissionEntity = ChannelUserPermissionEntity()

    const permissionsArray = convertPermissions(permissions)

    const permissionsAlter = permissions ? JSON.stringify(permissionsArray) : ''

    const channelUserPermission = channelUserPermissionEntity.create({
      data: {
        ...createChannelUserPermission,
        permissions: permissionsAlter
      }
    })

    return channelUserPermission
  }
}
