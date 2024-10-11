import { FastifyInstance, RouteOptions } from 'fastify'
import { register } from './controllers/register-controller'
import { registerSchema } from './swagger/schemas'

export const routes: RouteOptions[] = [
  {
    method: 'POST',
    url: '/users',
    schema: {
      tags: ['Users'],
      summary: '',
      description: '',
      ...registerSchema,
    },
    handler: register,
  },
]

export const registerRoutes = async (fastify: FastifyInstance) =>
  routes.forEach((route) => fastify.route(route))
