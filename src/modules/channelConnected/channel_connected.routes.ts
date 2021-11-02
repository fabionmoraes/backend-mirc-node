import { Router } from 'express'
import { celebrate, Segments, Joi } from 'celebrate'

import { ensureAuthenticated } from 'middleware/ensureAuthenticated'
import { CreateChannelConnectedController } from './controllers/CreateChannelConnectedController'

const channelConnectedRoutes = Router()

channelConnectedRoutes.use(ensureAuthenticated)
channelConnectedRoutes.post('/', celebrate({
  [Segments.BODY]: {
    channel_id: Joi.string().required()
  }
}), new CreateChannelConnectedController().handle)

export { channelConnectedRoutes }
