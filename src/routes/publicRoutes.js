import publicController from '#controllers/publicController.js';

async function publicRoutes(fastify, options) {
  fastify.get('/', publicController.getPublicData);
}

export default publicRoutes;