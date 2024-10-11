import { Prisma, User } from '@prisma/client'

export interface UsersRepository {
  create(data: Prisma.UserCreateInput): Promise<User>
  findByEmail({ email }: Prisma.UserWhereUniqueInput): Promise<User | null>
}
