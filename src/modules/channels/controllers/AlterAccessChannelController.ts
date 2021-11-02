import { Request, Response } from 'express'
import { AlterAccessChannelService } from '../services/AlterAccessChannelService'
import { VerifyIfExistsChannelByIdAndUserIdService } from '../services/VerifyIfExistsChannelByIdAndUserIdService'

export class AlterAccessChannelController {
    async handle(request: Request, response: Response) {
        const { user_id } = request
        const { access } = request.body
        const { id } = request.params

        const verifyIfExistsChannelByIdService = new VerifyIfExistsChannelByIdAndUserIdService()
        const alterAccessChannelService = new AlterAccessChannelService()

        await verifyIfExistsChannelByIdService.execute(user_id, id)
        const result = await alterAccessChannelService.execute({ access, id })

        return response.json(result)
    }
}
