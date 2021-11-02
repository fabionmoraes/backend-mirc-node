import { Request, Response } from 'express'

import { slug as slugify } from '@shared/utils'
import { CreateChannelService } from '../services/CreateChannelService'
import { VerifyIfExistsChannelSlugService } from '../services/VerifyIfExistsChannelSlugService'
import { CreateChannelConnectedService } from '@modules/channelConnected/services/CreateChannelConnectedService'

export class CreateChannelController {
    async handle(request: Request, response: Response) {
        const { user_id } = request
        const { name, description } = request.body
        const slug = slugify(name)

        const createChannelService = new CreateChannelService()
        const verifyIfExistsChannelSlugService = new VerifyIfExistsChannelSlugService()
        const createChannelConnectService = new CreateChannelConnectedService()

        await verifyIfExistsChannelSlugService.execute(slug)

        const result = await createChannelService.execute({ name, description, slug, user_id })
        await createChannelConnectService.execute(user_id, result.id)

        return response.status(201).json(result)
    }
}
