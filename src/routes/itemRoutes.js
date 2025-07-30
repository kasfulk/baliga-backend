import itemController from '@/controllers/itemController';
import authMiddleware from '@/utils/authMiddleware';

async function itemRoutes(fastify, options) {
  fastify.addHook('preHandler', authMiddleware);
  fastify.get('/items', itemController.getAllItems);
  fastify.get('/items/:id', itemController.getItemById);
}

export default itemRoutes;