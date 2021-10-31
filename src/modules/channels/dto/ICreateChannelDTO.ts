import { IsNotEmpty } from 'class-validator'

export class ICreateChannelDTO {
    @IsNotEmpty()
    name: string

    @IsNotEmpty()
    slug: string

    @IsNotEmpty()
    user_id: string
}