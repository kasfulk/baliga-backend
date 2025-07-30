import './config/moduleAlias.js';
import fastify from 'fastify';
import itemRoutes from '@/routes/itemRoutes';
import authRoutes from '@/routes/authRoutes';

const app = fastify({ logger: true });

app.register(authRoutes, { prefix: '/api/auth' });
app.register(itemRoutes, { prefix: '/api' });

const start = async () => {
  try {
    await app.listen({ port: 3000 });
  } catch (err) {
    app.log.error(err);
    process.exit(1);
  }
};

start();