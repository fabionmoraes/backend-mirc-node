import { Router } from 'express'
import { celebrate, Segments, Joi } from 'celebrate'

import { ensureAuthenticated } from 'middleware/ensureAuthenticated'
import { CreateChannelController } from './controllers/CreateChannelController'
import { AlterAccessChannelController } from './controllers/AlterAccessChannelController'

const channelsRouter = Router()

channelsRouter.use(ensureAuthenticated)

channelsRouter.post('/', celebrate({
    [Segments.BODY]: {
        name: Joi.string().required(),
    }
}), new CreateChannelController().handle)

channelsRouter.patch('/access/:slug', celebrate({
    [Segments.BODY]: {
        access: Joi.boolean().required()
    }
}), new AlterAccessChannelController().handle)

export { channelsRouter }