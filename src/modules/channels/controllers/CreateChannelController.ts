import { Request, Response } from 'express'

import { slug as slugify } from '@shared/utils'
import { CreateChannelService } from '../services/CreateChannelService'
import { VerifyIfExistsChannelSlug } from '../services/VerifyIfExistsChannelSlug'

export class CreateChannelController {
    async handle(request: Request, response: Response) {
        const { user_id } = request
        const { name } = request.body
        const slug = slugify(name)

        const createChannelService = new CreateChannelService()
        const verifyIfExistsChannelSlug = new VerifyIfExistsChannelSlug()

        try {
            await verifyIfExistsChannelSlug.execute(slug)

            const result = await createChannelService.execute({ name, slug, user_id })

            return response.json(result)
        } catch (err) {
            return response.status(400).json({ errorCode: err.message })
        }
    }
}