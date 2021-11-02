import { Request, Response } from 'express'

import { slug as slugify } from '@shared/utils'
import { CreateChannelService } from '../services/CreateChannelService'
import { VerifyIfExistsChannelSlug } from '../services/VerifyIfExistsChannelSlug'

export class CreateChannelController {
    async handle(request: Request, response: Response) {
        const { user_id } = request
        const { name, description } = request.body
        const slug = slugify(name)

        const createChannelService = new CreateChannelService()
        const verifyIfExistsChannelSlug = new VerifyIfExistsChannelSlug()
        
        await verifyIfExistsChannelSlug.execute(slug)

        const result = await createChannelService.execute({ name, description, slug, user_id })

        return response.json(result)
    }
}