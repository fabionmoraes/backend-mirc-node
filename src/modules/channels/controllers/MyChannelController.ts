import { Request, Response } from 'express'
import { MyChannelService } from '../services/MyChannelService'

export class MyChannelController {
  async handle(request: Request, response: Response) {
    const { user_id } = request

    const myChannelService = new MyChannelService

    const myChannel = await myChannelService.execute(user_id)

    return response.json(myChannel)
  }
}
