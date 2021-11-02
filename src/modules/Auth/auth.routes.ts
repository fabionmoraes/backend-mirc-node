import { Router } from 'express'
import { celebrate, Segments, Joi } from 'celebrate'
import { AuthenticateUserController } from './controllers/AuthenticateUserController'
import { AuthenticateGoogleUserController } from './controllers/AuthenticateGoogleUserController'

const authRoutes = Router()

authRoutes.post('/', celebrate({
    [Segments.BODY]: {
        username: Joi.string().required(),
        password: Joi.string().required()
    }
}), new AuthenticateUserController().handle)

authRoutes.post('/google', celebrate({
    [Segments.BODY]: {
        token: Joi.string().required(),
    }
}) , new AuthenticateGoogleUserController().handle)

export { authRoutes }