import { Request, Response } from 'express'

import { AuthenticateGoogleUserService } from '../services/AuthenticateGoogleUserService'

export class AuthenticateGoogleUserController {
    async handle(request: Request, response: Response) {
        const { token } = request.body

        const authenticateGoogleUserService = new AuthenticateGoogleUserService()

        const auth = await authenticateGoogleUserService.execute(token)

        return response.json(auth)
    }
}
