import itemController from '#controllers/itemController.js';
import authMiddleware from '#utils/authMiddleware.js';

async function itemRoutes(fastify, options) {
  fastify.addHook('preHandler', authMiddleware);
  fastify.get('/items', itemController.getAllItems);
  fastify.get('/items/:id', itemController.getItemById);
}

export default itemRoutes;