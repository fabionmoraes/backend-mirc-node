import { Router } from 'express'
import { ensureAuthenticated } from 'middleware/ensureAuthenticated'
import { ProfileUserController } from './controllers/ProfileUserController'

const usersRouter = Router()

usersRouter.use(ensureAuthenticated)

usersRouter.get('/', new ProfileUserController().handle)

export { usersRouter }