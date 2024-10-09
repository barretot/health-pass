import 'dotenv/config'

import { z } from 'zod'
import { allEnvs } from './envs'

const envSchema = z.object(allEnvs)

const _env = envSchema.safeParse(process.env)

if (!_env.success) {
  console.log('❌ Invalid environment variables', _env.error.format())

  throw new Error('Invalid environment variables')
}

export const env = _env.data
