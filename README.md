# CloudFlare Workers Typescript REST API Boilerplate
> Author: Patricio Tena

This is a REST API boilerplate for CloudFlare Workers using Typescript. This template uses subrouting to give a better organization for each hanlder and its respective functions.

## Parent Router
First you create a `parent` router as follows:
```ts
const parent = Router()

parent
  .all('/v1/handler*', handlerRoutes.handle)
  .all('*', () => missing('Root API could not find that endpoint.'))
```

As you can see in the example above, the parent router has a handler for each hanlder subrouter. 
I personally create each subrouter routes in the `/routes` folder, then export it to the `handler.ts`.


## Child Routers

Each child router must have a base defined:

```ts
const v1 = Router({ base: '/v1' }) 
```

After that you can use it as a regular router:
```ts
import {handleFetch} from '../handlers/handler'
v1
  .get('/handler/test', () => new Response("Testing!", { status: 200 }))
  .get('/handler',handleFetch)
  .all('*', () => missing('API v1/handler could not find that endpoint.'))

export default v1
```
> The handleFecth function is imported from the `./handlers` folder. 

## Handlers

A basic structure for a function hanlder can look something like this:

```ts
export async function handleFetch(event: Event){
    try{
        return new Response(JSON.stringify({
            status: 200,
            message: 'Ok',}), {
        status: 200,
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json'
        }
        })
    }catch(err){
        console.log(err);
    }
}
```