import { z } from 'zod'

const envSchema = z.object({
  ENVIROMENT: z
    .enum(['develop', 'homolog', 'test', 'production'])
    .default('production'),
  NEXT_PUBLIC_IMAGE_HOST: z.string().default('http://localhost:3000')
})

// eslint-disable-next-line no-underscore-dangle
const _env = envSchema.safeParse(process.env)

if (_env.success === false) {
  // eslint-disable-next-line no-console
  console.error('Invalid enviroment variables!', _env.error.format())
  throw new Error('Invalid enviroment variables!')
}

export const env = _env.data
