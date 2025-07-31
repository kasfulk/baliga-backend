import itemRepository from '#repositories/itemRepository.js';

class ItemService {
  getAllItems() {
    return itemRepository.getAll();
  }

  getItemById(id) {
    return itemRepository.getById(id);
  }
}

export default new ItemService();