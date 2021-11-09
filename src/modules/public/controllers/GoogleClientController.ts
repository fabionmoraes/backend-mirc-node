import { Request, Response } from 'express'
import { GoogleClientService } from "../services/GoogleClientService";

export class GoogleClientController {
  handle(request: Request, response: Response) {
    const googleClientService = new GoogleClientService()
    const googleClient = googleClientService.execute()

    return response.json({ googleClient })
  }
}
