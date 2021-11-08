import { Request, Response } from 'express'

import { slug as slugify } from '@shared/utils'
import { CreateChannelService } from '../services/CreateChannelService'
import { VerifyIfExistsChannelSlugService } from '../services/VerifyIfExistsChannelSlugService'
import { CreateChannelConnectedService } from '@modules/channelConnected/services/CreateChannelConnectedService'
import { CreateChannelPermissionsService } from '@modules/channelPermissions/services/CreateChannelPermissionsService'
import { CreateChannelUserPermissionsService } from '@modules/channelUserPermissions/services/CreateChannelUserPermissionsService'

export class CreateChannelController {
    async handle(request: Request, response: Response) {
        const { user_id } = request
        const { name, description, permissions } = request.body
        const slug = slugify(name)

        const createChannelService = new CreateChannelService()
        const createChannelPermissionsService = new CreateChannelPermissionsService()
        const verifyIfExistsChannelSlugService = new VerifyIfExistsChannelSlugService()
        const createChannelConnectService = new CreateChannelConnectedService()
        const createChannelUserPermissionsService = new CreateChannelUserPermissionsService()

        await verifyIfExistsChannelSlugService.execute(slug)

        const result = await createChannelService.execute({ name, description, slug, user_id })
        const permissionsChannel = await createChannelPermissionsService.execute({
          permissions,
          channel_id: result.id
        })
        await createChannelUserPermissionsService.execute({
          user_id,
          channel_permission_id: permissionsChannel.id,
          permissions
        })
        await createChannelConnectService.execute({
          user_id,
          channel_id: result.id,
          level: 'op'
        })

        return response.status(201).json({
          ...result,
          permissions: permissionsChannel
        })
    }
}
