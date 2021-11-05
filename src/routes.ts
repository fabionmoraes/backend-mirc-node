import { Router } from 'express'

import { usersRouter } from '@modules/users/users.routes'
import { authRoutes } from '@modules/Auth/auth.routes'
import { channelsRouter } from '@modules/channels/channels.routes'
import { channelConnectedRoutes } from '@modules/channelConnected/channel_connected.routes'
import { messagesRoutes } from '@modules/messages/messages.routes'

const routes = Router()

routes.use('/auth', authRoutes)
routes.use('/profile', usersRouter)
routes.use('/channels', channelsRouter)
routes.use('/channel_connected', channelConnectedRoutes)
routes.use('/messages', messagesRoutes)

export { routes }
