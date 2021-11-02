import { Request, Response, NextFunction } from 'express'
import { AppError } from '@config/AppError';
import { verify } from 'jsonwebtoken'

interface IPayload {
    sub: string
}

export function ensureAuthenticated(request: Request, response: Response, next: NextFunction) {
    const authToken = request.headers.authorization;

    if (!authToken) {
        throw new AppError('token.invalid', 401)
    }

    const [, token] = authToken.split(' ')

    try {
        const { sub } = verify(token, String(process.env.JWT_SECRET)) as IPayload

        request.user_id = sub

        return next()
    } catch (err) {
        throw new AppError('token.expired', 401)
    }
}
