import prismaClient from 'prisma'
import { ICreateChannelDTO } from '../dto/ICreateChannelDTO';

export class CreateChannelService {
    async execute(createChannelDto: ICreateChannelDTO) {
        const channel = await prismaClient.channel.create({
            data: createChannelDto,
            include: {
                user: true
            }
        })

        return channel
    }
}