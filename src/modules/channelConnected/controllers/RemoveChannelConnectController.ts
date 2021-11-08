import { Request, Response } from 'express'
import { FindFirstChannelConnectService } from '../services/FindFirstChannelConnectService'
import { RemoveChannelConnectService } from '../services/RemoveChannelConnectService'

export class RemoveChannelConnectController {
  async handle(request: Request, response: Response) {
    const { user_id, params: { channel_id } } = request

    const findFirstChannelConnectService = new FindFirstChannelConnectService()
    const removeChannelConnectService = new RemoveChannelConnectService()

    const channelConnect = await findFirstChannelConnectService.execute({ user_id, channel_id })
    await removeChannelConnectService.execute({ channel_connect_id: channelConnect.id })

    return response.send()
  }
}
