import swagger from '@fastify/swagger'
import swaggerUi from '@fastify/swagger-ui'
import { FastifyInstance } from 'fastify'

export default (app: FastifyInstance) => {
  app.register(swagger, {
    openapi: {
      openapi: '3.0.0',
      info: {
        title: 'API Documentation',
        description: 'API HealthPass Documentation',
        version: '1.0.0',
      },
    },
  })

  app.register(swaggerUi, {
    routePrefix: '/docs',
    uiConfig: {
      docExpansion: 'list',
      deepLinking: false,
    },
    uiHooks: {
      onRequest: (_request, _reply, next) => {
        next()
      },
      preHandler: (_request, _reply, next) => {
        next()
      },
    },
    staticCSP: true,
    transformStaticCSP: (header) => header,
  })
}
