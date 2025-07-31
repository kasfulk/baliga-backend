import Item from '#models/Item.js';

class ItemRepository {
  async getAll() {
    return Item.findAll();
  }

  async getById(id) {
    return Item.findByPk(id);
  }
}

export default new ItemRepository();