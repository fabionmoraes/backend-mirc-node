import { Request, Response } from 'express'
import { AuthenticateUserService } from '../services/AuthenticateUserService'
import { FindFirstUserByEmailService } from '@modules/users/services/FindFirstUserByEmailService'

export class AuthenticateUserController {
    async handle(request: Request, response: Response) {
        const { email, password } = request.body

        const findFirstUserByEmailService = new FindFirstUserByEmailService()
        const authenticateUserService = new AuthenticateUserService()
        
        try {
            const user = await findFirstUserByEmailService.execute(email)
            const result = await authenticateUserService.execute(user, password)

            return response.json(result)
        } catch (err) {
            response.status(401).json({ errorCode: err.message })
        }
    }
}