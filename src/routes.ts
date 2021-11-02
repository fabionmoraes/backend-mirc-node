import { Router } from 'express'

import { usersRouter } from '@modules/users/users.routes'
import { authRoutes } from '@modules/Auth/auth.routes'
import { channelsRouter } from '@modules/channels/channels.routes'

const routes = Router()

routes.use('/login', authRoutes)
routes.use('/profile', usersRouter)
routes.use('/channels', channelsRouter)

export { routes }