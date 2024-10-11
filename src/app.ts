import fastify from 'fastify'

import { registerPlugins } from '@/config/fastify/plugins'

import { registerRoutes } from './http/routes'
import { ZodError } from 'zod'
import { env } from './config/env'

export const app = fastify()

registerPlugins(app)

app.register(registerRoutes, { prefix: '/api' })

app.setErrorHandler((error, _, reply) => {
  if (error instanceof ZodError) {
    return reply
      .status(400)
      .send({ message: 'Validation error', issues: error.format() })
  }

  if (env.NODE_ENV !== 'prd') {
    console.log(error)
  } else {
    // TODO: Here we should log to a external tool like DataDog/NewRelic/Sentry
  }

  return reply.status(500).send({ message: 'Internal server error.' })
})
