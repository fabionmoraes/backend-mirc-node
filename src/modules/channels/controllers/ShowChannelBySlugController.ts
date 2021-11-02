import { Request, Response } from 'express'
import { ShowChannelBySlugService } from '../services/ShowChannelBySlugService'

export class ShowChannelBySlugController {
  async handle(request: Request, response: Response) {
    const { slug } = request.params

    const showChannelBySlugService = new ShowChannelBySlugService()

    const channel = await showChannelBySlugService.execute(slug)

    return response.json(channel)
  }
}
