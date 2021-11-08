import { Router } from 'express'
import { celebrate, Segments, Joi } from 'celebrate'

import { ensureAuthenticated } from 'middleware/ensureAuthenticated'
import { CreateChannelController } from './controllers/CreateChannelController'
import { AlterAccessChannelController } from './controllers/AlterAccessChannelController'
import { ListChannelsController } from './controllers/ListChannelsController'
import { ShowChannelBySlugController } from './controllers/ShowChannelBySlugController'
import { MyChannelsController } from './controllers/MyChannelsController'

const channelsRouter = Router()

channelsRouter.use(ensureAuthenticated)

channelsRouter.get('/', new ListChannelsController().handle)
channelsRouter.get('/my', new MyChannelsController().handle)
channelsRouter.get('/slug/:slug', new ShowChannelBySlugController().handle)

channelsRouter.post('/', celebrate({
    [Segments.BODY]: {
        name: Joi.string().required(),
        description: Joi.string(),
        permissions: Joi.object().required().keys({
          message: Joi.boolean().required(),
          view: Joi.boolean().required(),
        }),
    }
}), new CreateChannelController().handle)

channelsRouter.patch('/access/:id', celebrate({
    [Segments.BODY]: {
        access: Joi.boolean().required()
    }
}), new AlterAccessChannelController().handle)

export { channelsRouter }
