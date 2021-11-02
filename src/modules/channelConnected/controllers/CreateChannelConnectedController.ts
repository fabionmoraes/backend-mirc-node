import { Request, Response } from 'express'

import { VerifyIfExistsChannelConnectService } from '../services/VerifyIfExistsChannelConnectService'
import { CreateChannelConnectedService } from '../services/CreateChannelConnectedService'

export class CreateChannelConnectedController {
  async handle(request: Request, response: Response) {
    const { user_id } = request
    const { channel_id } = request.body

    const verifyIfExistsChannelConnectService = new VerifyIfExistsChannelConnectService()
    const createChannelConnectedService = new CreateChannelConnectedService()

    await verifyIfExistsChannelConnectService.execute(channel_id)
    const result = await createChannelConnectedService.execute(user_id, channel_id)

    return response.json(result)
  }
}
