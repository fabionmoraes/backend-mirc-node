import { Request, Response } from 'express'
import { VerifyIfExistsChannelConnectToUserService } from '@modules/channelConnected/services/VerifyIfExistsChannelConnectToUserService'
import { GetMessagesByChannelService } from '../services/GetMessagesByChannelService'

export class GetMessagesByChannelController {
  async handle(request: Request, response: Response) {
    const { user_id, params: { channel_id } } = request

    const verifyIfExistsChannelConnectToUserService = new VerifyIfExistsChannelConnectToUserService()
    const getMessagesByChannelService = new GetMessagesByChannelService()

    await verifyIfExistsChannelConnectToUserService.execute(channel_id, user_id)
    const messages = await getMessagesByChannelService.execute(channel_id)

    return response.json({
      data: messages,
    })
  }
}
