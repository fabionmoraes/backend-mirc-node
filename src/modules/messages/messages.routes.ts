import { Router } from 'express'
import { ensureAuthenticated } from 'middleware/ensureAuthenticated'
import { CreateMessagesController } from './controllers/CreateMessagesController'

const messagesRoutes = Router()

messagesRoutes.use(ensureAuthenticated)

messagesRoutes.post('/:channel_id', new CreateMessagesController().handle)

export { messagesRoutes }
