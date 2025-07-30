import itemService from '@/services/itemService';

class ItemController {
  getAllItems(req, reply) {
    const items = itemService.getAllItems();
    reply.send(items);
  }

  getItemById(req, reply) {
    const item = itemService.getItemById(parseInt(req.params.id, 10));
    if (item) {
      reply.send(item);
    } else {
      reply.code(404).send({ message: 'Item not found' });
    }
  }
}

export default new ItemController();