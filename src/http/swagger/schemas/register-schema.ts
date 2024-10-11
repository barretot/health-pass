export const registerSchema = {
  body: {
    type: 'object',
    properties: {
      name: { type: 'string' },
      email: { type: 'string' },
      password: { type: 'string' },
    },
  },
  response: {
    201: {
      description: 'User created',
    },
  },
}
