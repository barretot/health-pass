import { z } from 'zod'

export const allEnvs = {
  NODE_ENV: z.enum(['dev', 'test', 'prd']).default('dev'),
  PORT: z.coerce.number(), // Converte para number devido ao corce
  DATABASE_URL: z.string(),
}
