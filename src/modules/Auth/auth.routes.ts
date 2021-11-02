import { Router } from 'express'
import { AuthenticateUserController } from './controllers/AuthenticateUserController'

const authRoutes = Router()

authRoutes.post('/', new AuthenticateUserController().handle)

export { authRoutes }