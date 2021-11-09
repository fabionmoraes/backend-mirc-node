import { Router } from 'express'
import { GoogleClientController } from './controllers/GoogleClientController'

const publicRoutes = Router()

publicRoutes.get('/google_client', new GoogleClientController().handle)

export { publicRoutes }
