import prismaClient from 'prisma'

export class VerifyIfExistsChannelSlug {
    async execute(slug: string) {
        const channel = await prismaClient.channel.findFirst({
            where: {
                slug
            }
        })

        if (channel) {
            throw new Error('Ops! Esse canal já existe.')
        }
    }
}