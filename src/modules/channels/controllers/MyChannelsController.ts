import { Request, Response } from 'express'
import { MyChannelsService } from '../services/MyChannelsService'

export class MyChannelsController {
  async handle(request: Request, response: Response) {
    const { user_id } = request

    const myChannelsService = new MyChannelsService

    const myChannels = await myChannelsService.execute(user_id)

    return response.json({
      data: myChannels
    })
  }
}
