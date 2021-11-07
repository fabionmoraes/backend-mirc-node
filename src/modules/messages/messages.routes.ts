import { Router } from 'express'
import { celebrate, Segments, Joi } from 'celebrate'
import { ensureAuthenticated } from 'middleware/ensureAuthenticated'
import { CreateMessagesController } from './controllers/CreateMessagesController'
import { GetMessagesByChannelController } from './controllers/GetMessagesByChannelController'

const messagesRoutes = Router()

messagesRoutes.use(ensureAuthenticated)

messagesRoutes.post('/:channel_id', celebrate({
  [Segments.BODY]: {
    messages: Joi.string().required(),
  }
}), new CreateMessagesController().handle)

messagesRoutes.get('/channel/:channel_id', new GetMessagesByChannelController().handle)

export { messagesRoutes }
