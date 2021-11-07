import { sign } from 'jsonwebtoken'

interface IJwtConfig {
  name: string
  avatar: any
  id: string
}

export const jwtConfig = ({ name, avatar, id }: IJwtConfig) => {
    const token = sign(
        {
            user: {
                name: name,
                avatar_url: avatar,
                id
            }
        },
        String(process.env.JWT_SECRET),
        {
            subject: id,
            expiresIn: "6d"
        }
    )

    return token
}
