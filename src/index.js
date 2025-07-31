import itemRoutes from '#routes/itemRoutes.js';
import authRoutes from '#routes/authRoutes.js';
import publicRoutes from '#routes/publicRoutes.js';
import fastify from 'fastify';

const app = fastify({ logger: true });

app.register(authRoutes, { prefix: '/api/auth' });
app.register(itemRoutes, { prefix: '/api' });
app.register(publicRoutes, { prefix: '/' });

const start = async () => {
  try {
    await app.listen({ port: 3000 });
  } catch (err) {
    app.log.error(err);
    process.exit(1);
  }
};

start();
