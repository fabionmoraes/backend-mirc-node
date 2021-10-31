import { CreateChannelController } from '@modules/channels/controllers/CreateChannelController'
import { Router } from 'express'
import { ensureAuthenticated } from './middleware/ensureAuthenticated'
import { AuthenticateUserController } from './modules/users/controllers/AuthenticateUserController'
import { ProfileUserController } from './modules/users/controllers/ProfileUserController'

const router = Router()

router.get('/profile', ensureAuthenticated, new ProfileUserController().handle)
router.post('/login', new AuthenticateUserController().handle)

router.post('/channels', ensureAuthenticated, new CreateChannelController().handle)

export { router }