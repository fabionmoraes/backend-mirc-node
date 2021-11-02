import { decode } from 'jsonwebtoken'
import bcrypt from 'bcrypt'

import { jwtConfig } from '@config/jwt';
import prismaClient from 'prisma'
import { slug } from '@shared/utils';

interface IGoogleOATH {
  email: string
  name: string
  picture: string
  given_name: string
  family_name: string
  sub: string
}

export class AuthenticateGoogleUserService {
    async execute(token_google: string) {
        const { sub, email, name, picture, family_name } = decode(token_google) as IGoogleOATH

        let user = await prismaClient.user.findFirst({
            where: {
                google_id: sub,
            }
        })

        if (!user) {
          const salt = await bcrypt.genSalt();
          const password = await bcrypt.hash(`${sub}${family_name}`, salt)

            user = await prismaClient.user.create({
              data: {
                username: `${slug(name)}${sub}`,
                email,
                name,
                avatar_url: picture,
                google_id: sub,
                password
              }
            })
        }

        const token = jwtConfig({
          id: user.id,
          avatar: user.avatar_url,
          name: user.name
        })

        const { password, ...result } = user

        return { token, user: result }
    }
}
