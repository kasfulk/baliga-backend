const items = [
  { id: 1, name: 'Item 1' },
  { id: 2, name: 'Item 2' },
];

class ItemRepository {
  getAll() {
    return items;
  }

  getById(id) {
    return items.find((item) => item.id === id);
  }
}

export default new ItemRepository();