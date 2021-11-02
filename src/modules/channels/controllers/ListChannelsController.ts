import { Request, Response } from 'express'
import { ListChannelsService } from '../services/ListChannelsService'

export class ListChannelsController {
  async handle(request: Request, response: Response) {
    const listChannelsService = new ListChannelsService()

    const result = await listChannelsService.execute()

    response.json(result)
  }
}
