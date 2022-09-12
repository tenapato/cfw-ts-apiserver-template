import { Router } from 'itty-router'
import { missing, json } from 'itty-router-extras'

import {handleFetch} from '../handlers/handler'

const v1 = Router({ base: '/v1' }) // must define base for child routers


v1
  .get('/handler/test', () => new Response("Testing!", { status: 200 }))
  .get('/handler',handleFetch)
  .all('*', () => missing('API v1/handler could not find that endpoint.'))

export default v1