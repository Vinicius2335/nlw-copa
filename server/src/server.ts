// npm init -y
// npm i typescript -d
// npx tsc --init
// npm i fastify
// npm i tsx -D
// config scrip packtjson dev: tsx watch src/server.ts
// npm run dev
// npm i @fastify/cors
// npm i zod¨
// npm i short-unique-id

import Fastify from 'fastify';
import cors from '@fastify/cors';
import { z } from 'zod';
import { PrismaClient } from '@prisma/client';
import ShortUniqueId from 'short-unique-id';

// log para todas as query
const prisma = new PrismaClient({
  log: ['query'],
});

async function bootstrap() {
  const fastify = Fastify({
    logger: true,
  });

  await fastify.register(cors, {
    origin: true,
  })

  // 1 endpoint/ retorna o numero de boloes
  fastify.get('/pools/count', async () => {
    const count = await prisma.pool.count();

    return { count };
  });

  // retorna o numero de usuários
  fastify.get('/users/count', async () => {
    const count = await prisma.user.count();

    return { count };
  });

  // retorna o numero de palpites
  fastify.get('/guesses/count', async () => {
    const count = await prisma.guess.count();

    return { count };
  });

  // cria um novo bolao
  fastify.post('/pools', async (req, res) => {
    const createPoolBody = z.object({
      title: z.string(),
    });

    const { title } = createPoolBody.parse(req.body);

    const generate = new ShortUniqueId({ length: 6 })
    const code = String(generate()).toLocaleUpperCase();

    await prisma.pool.create({
      data: {
        title,
        code,
      }
    })

    res.status(201).send({ title, code });
  });

  await fastify.listen({ port: 3333, host: '0.0.0.0' });
}

bootstrap();

