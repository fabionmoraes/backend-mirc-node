import { Request, Response } from 'express'
import { MyAssocieteChannelConnectedService } from '../services/MyAssocieteChannelConnectedService'

export class MyAssocieteChannelConnectController {
  async handle(request: Request, response: Response) {
    const { user_id } = request

    const myAssocieteChannelConnectService = new MyAssocieteChannelConnectedService()

    const mychannelconnect = await myAssocieteChannelConnectService.execute(user_id)

    return response.json({
      data: mychannelconnect
    })
  }
}
