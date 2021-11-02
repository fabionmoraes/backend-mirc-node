import { Router } from 'express'
import { celebrate, Segments, Joi } from 'celebrate'

import { ensureAuthenticated } from 'middleware/ensureAuthenticated'
import { CreateChannelController } from './controllers/CreateChannelController'
import { AlterAccessChannelController } from './controllers/AlterAccessChannelController'
import { ListChannelsController } from './controllers/ListChannelsController'
import { ShowChannelBySlugController } from './controllers/ShowChannelBySlugController'

const channelsRouter = Router()

channelsRouter.use(ensureAuthenticated)

channelsRouter.get('/', new ListChannelsController().handle)
channelsRouter.get('/:id', new ShowChannelBySlugController().handle)

channelsRouter.post('/', celebrate({
    [Segments.BODY]: {
        name: Joi.string().required(),
        description: Joi.string(),
    }
}), new CreateChannelController().handle)

channelsRouter.patch('/access/:id', celebrate({
    [Segments.BODY]: {
        access: Joi.boolean().required()
    }
}), new AlterAccessChannelController().handle)

export { channelsRouter }
