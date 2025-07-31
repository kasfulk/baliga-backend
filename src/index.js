import 'dotenv/config';
import itemRoutes from '#routes/itemRoutes.js';
import authRoutes from '#routes/authRoutes.js';
import publicRoutes from '#routes/publicRoutes.js';
import fastify from 'fastify';
import sequelize from '#config/database.js';
import User from '#models/User.js';
import Item from '#models/Item.js';

const app = fastify({ logger: true });

app.register(authRoutes, { prefix: '/api/auth' });
app.register(itemRoutes, { prefix: '/api' });
app.register(publicRoutes, { prefix: '/' });

const start = async () => {
  try {
    await sequelize.authenticate();
    console.log('Connection to MySQL has been established successfully.');
    await sequelize.sync({ force: false }); // Use { force: true } to drop and re-create tables on every sync
    console.log('All models were synchronized successfully.');
    await app.listen({ port: 3000 });
  } catch (err) {
    app.log.error(err);
    console.error('Unable to connect to the database:', err);
    process.exit(1);
  }
};

start();
