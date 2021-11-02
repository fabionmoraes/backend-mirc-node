import bcrypt from 'bcrypt'
import prismaClient from 'prisma'

import { jwtConfig } from '@config/jwt';
import { AppError } from '@config/AppError';

export class AuthenticateUserService {
    async execute(username: string, password: string) {
        const user = await prismaClient.user.findFirst({
            where: {
                username,
            }
        })

        if (!user) {
            throw new AppError('Ops! Senha ou Username Invalido', 401)
        }

        const isMatch = await bcrypt.compare(password, String(user.password));

        if (!isMatch) {
            throw new AppError('Ops! Senha ou Username Invalido', 401)
        }

        const token = jwtConfig({
          name: user.name,
          avatar: user.avatar_url,
          id: user.id
        })

        const { password: pass, ...result } = user

        return { token, user: result }
    }
}
