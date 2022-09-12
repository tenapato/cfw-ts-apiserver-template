import { Router } from 'itty-router'
import { missing, json } from 'itty-router-extras'

import handlerRoutes from './routes/routes'

const parent = Router()

parent
  .all('/v1/handler*', handlerRoutes.handle)
  .all('*', () => missing('Root API could not find that endpoint.'))


export const handleRequest = (request: Request): Promise<Response> => parent.handle(request)