import { Router } from 'express'
import { celebrate, Segments, Joi } from 'celebrate'

import { ensureAuthenticated } from 'middleware/ensureAuthenticated'
import { CreateChannelConnectedController } from './controllers/CreateChannelConnectedController'
import { MyAssocieteChannelConnectController } from './controllers/MyAssocieteChannelConnectController'
import { RemoveChannelConnectController } from './controllers/RemoveChannelConnectController'

const channelConnectedRoutes = Router()

channelConnectedRoutes.use(ensureAuthenticated)

channelConnectedRoutes.post('/', celebrate({
  [Segments.BODY]: {
    channel_id: Joi.string().required()
  }
}), new CreateChannelConnectedController().handle)

channelConnectedRoutes.get('/my', new MyAssocieteChannelConnectController().handle)

channelConnectedRoutes.delete('/channel/:channel_id', new RemoveChannelConnectController().handle)

export { channelConnectedRoutes }
