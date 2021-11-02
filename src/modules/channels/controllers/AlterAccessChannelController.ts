import { Request, Response } from 'express'
import { AlterAccessChannelService } from '../services/AlterAccessChannelService'
import { VerifyIfExistsChannelSlugAndUserId } from '../services/VerifyIfExistsChannelSlugAndUserId'

export class AlterAccessChannelController {
    async handle(request: Request, response: Response) {
        const { user_id } = request
        const { access } = request.body
        const { slug } = request.params

        const verifyIfExistsChannelSlugService = new VerifyIfExistsChannelSlugAndUserId()
        const alterAccessChannelService = new AlterAccessChannelService()

        await verifyIfExistsChannelSlugService.execute(user_id, slug)
        const result = await alterAccessChannelService.execute({ access, slug })

        return response.json(result)
    }
}