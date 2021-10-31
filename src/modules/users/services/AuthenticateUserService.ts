import bcrypt from 'bcrypt'
import { jwtConfig } from '@config/jwt';
import { IUserDTO } from '../dto/IUserDTO';

export class AuthenticateUserService {
    async execute(user: IUserDTO, password: string) {
        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            throw new Error('Ops! Senha ou Email Invalido')
        }

        const token = jwtConfig(user)

        delete user.password

        return { token, user }
    }
}