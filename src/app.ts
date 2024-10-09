import fastify, {
  FastifyInstance,
  FastifyReply,
  FastifyRequest,
  RouteOptions,
} from 'fastify'

import { registerPlugins } from '@/fastify/plugins'

import { PrismaClient } from '@prisma/client'

export const app = fastify()

registerPlugins(app)

const routes: RouteOptions[] = [
  {
    method: 'POST',
    url: '/users',
    schema: {},
    handler: async (request: FastifyRequest, reply: FastifyReply) => {
      return reply.send({
        ok: true,
      })
    },
  },
]

const registerRoutes = async (fastify: FastifyInstance) =>
  routes.forEach((route) => fastify.route(route))

app.register(registerRoutes, { prefix: '/api' })
