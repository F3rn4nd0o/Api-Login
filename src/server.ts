import fastifyCors from '@fastify/cors'
import { app } from './app'
import { env } from './env'

app.register(fastifyCors)

app
  .listen({
    host: '192.168.0.49',
    port: env.PORT,
  })
  .then(() => {
    console.log('HTTP Server Running')
  })
