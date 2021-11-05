import { Request, Response } from 'express'

import { VerifyIfExistsChannelConnectToUserService } from '../services/VerifyIfExistsChannelConnectToUserService'
import { CreateChannelConnectedService } from '../services/CreateChannelConnectedService'
import { VerifyIfExistsChannelByIdService } from '@modules/channels/services/VerifyIfExistsChannelByIdService'

export class CreateChannelConnectedController {
  async handle(request: Request, response: Response) {
    const { user_id } = request
    const { channel_id } = request.body

    const verifyIfExistsChannelByIdService = new VerifyIfExistsChannelByIdService()
    const verifyIfExistsChannelConnectToUserService = new VerifyIfExistsChannelConnectToUserService()
    const createChannelConnectedService = new CreateChannelConnectedService()

    await verifyIfExistsChannelByIdService.execute(channel_id)
    await verifyIfExistsChannelConnectToUserService.execute(channel_id, user_id)
    const result = await createChannelConnectedService.execute(user_id, channel_id)

    return response.status(201).json(result)
  }
}
