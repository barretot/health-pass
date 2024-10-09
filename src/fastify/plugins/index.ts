import healthcheck from './fastify-healthcheck'
import swagger from './fastify-swagger'

import cors from './fastify-cors'
import { FastifyInstance } from 'fastify'

const plugins = [swagger, cors, healthcheck]

export const registerPlugins = (fastify: FastifyInstance) => {
  plugins.forEach((plugin) => plugin(fastify))
}
