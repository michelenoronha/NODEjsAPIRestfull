import { FastifyInstance, RouteShorthandOptions } from fastify
import { z } from 'zod'
import { prisma } from './lib/prisma'

export async function memoriesRoutes(app: FastifyInstance) {
  const getMemoriesOptions: RouteShorthandOptions = {
    schema: {
      response: {
        200: {
          type: 'array',
          items: {
            type: 'object',
            properties: {
              id: { type: 'string' },
              coverUrl: { type: 'string' },
              excerpt: { type: 'string' },
            },
          },
        },
      },
    },
  }

  app.get('/memories', getMemoriesOptions, async () => {
    const memories = await prisma.memory.findMany({
      orderBy: {
        createdAt: 'asc',
      },
    })

    return memories.map((memory) => ({
      id: memory.id,
      coverUrl: memory.coverUrl,
      excerpt: memory.content.substring(0, 115).concat('...'),
    }))
  })

  app.get('/memories/:id', async (request) => {
    const paramsSchema = z.object({
      id: z.string().uuid(),
    })

    const { id } = paramsSchema.parse(request.params)

    const memory = await prisma.memory.findUniqueOrThrow({
      where: {
        id,
      },
    })

    return memory
  })

  const postMemoriesOptions: RouteShorthandOptions = {
    schema: {
      body: {
        type: 'object',
        required: ['content', 'coverUrl'],
        properties: {
          content: { type: 'string' },
          coverUrl: { type: 'string' },
          isPublic: { type: 'boolean' },
        },
      },
      response: {
        200: {
          type: 'object',
          properties: {
            id: { type: 'string' },
            content: { type: 'string' },
            coverUrl: { type: 'string' },
            isPublic: { type: 'boolean' },
          },
        },
      },
    },
  }

  app.post('/memories', postMemoriesOptions, async (request) => {
    const { content, coverUrl, isPublic = false } = request.body

    const memory = await prisma.memory.create({
      data: {
        content,
        coverUrl,
        isPublic,
        userId: 'aebfe41d-1d0a-4ff7-b233-df6ea9c1a7c7',
      },
    })

    return memory
  })

  const putMemoriesOptions: RouteShorthandOptions = {
    schema: {
      params: paramsSchema,
      body: {
        type: 'object',
        properties: {
          content: { type: 'string' },
          coverUrl: { type: 'string' },
          isPublic: { type: 'boolean' },
        },
      },
      response: {
        200: {
          type: 'object',
          properties: {
            id: { type: 'string' },
            content: { type: 'string' },
            coverUrl: { type: 'string' },
            isPublic: { type: 'boolean' },
          },
        },
      },
    },
  }

  app.put('/memories/:id', putMemoriesOptions, async (request) => {
    const { id } = request.params
    const { content, coverUrl, isPublic } = request.body

    const memory = await prisma.memory.update({
      where: {
        id,
      },
      data: {
        content,
        coverUrl,
        isPublic,
      },
    })

    return memory
  })

  const deleteMemoriesOptions: RouteShorthandOptions = {
    schema: {
      params: paramsSchema,
    },
  }

  app.delete('/memories/:id', deleteMemoriesOptions, async (request) => {
    const { id } = request.params
    await prisma.memory.delete({
      where: {
        id,
      },
    })
  })
}
