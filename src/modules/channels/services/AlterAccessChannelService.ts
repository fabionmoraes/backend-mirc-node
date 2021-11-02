import prismaClient from 'prisma'
import { IAlterAccessChannelDTO } from '../dto/IAlterAccessChannelDTO';

export class AlterAccessChannelService {
    async execute(data: IAlterAccessChannelDTO) {
        const { slug, access } = data

        const channel = await prismaClient.channel.update({
            data: {
                access
            },
            where: {
                slug
            }
        })

        return channel
    }
}