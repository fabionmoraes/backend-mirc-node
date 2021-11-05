import { Request, Response } from 'express'
import { CreateMessagesService } from '../services/CreateMessagesService'
import { VerifyIfExistsChannelByIdService } from '@modules/channels/services/VerifyIfExistsChannelByIdService'
import { VerifyIfExistsChannelConnectToUserService } from '@modules/channelConnected/services/VerifyIfExistsChannelConnectToUserService'

export class CreateMessagesController {
  async handle(request: Request, response: Response) {
    const { user_id, body: { messages }, params: { channel_id } } = request

    const verifyIfExistsChannelByIdService = new VerifyIfExistsChannelByIdService()
    const verifyIfExistsChannelConnectToUserService = new VerifyIfExistsChannelConnectToUserService()
    const createMessagesService = new CreateMessagesService()

    await verifyIfExistsChannelByIdService.execute(channel_id)
    await verifyIfExistsChannelConnectToUserService.execute(channel_id, user_id)
    const message = await createMessagesService.execute({ user_id, messages, channel_id })

    return response.status(201).json(message)
  }
}
