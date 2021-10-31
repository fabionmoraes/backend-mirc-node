import { sign } from 'jsonwebtoken'
import { IUserDTO } from '../modules/users/dto/IUserDTO'

export const jwtConfig = (user: IUserDTO) => {
    const token = sign(
        {
            user: {
                name: user.name,
                avatar_url: user.avatar_url,
                id: user.id
            }
        },
        process.env.JWT_SECRET,
        {
            subject: user.id,
            expiresIn: "1d"
        }
    )

    return token
}