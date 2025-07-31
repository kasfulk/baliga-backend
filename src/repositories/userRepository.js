import User from '#models/User.js';

class UserRepository {
  async create(user) {
    return User.create(user);
  }

  async findByUsername(username) {
    return User.findOne({ where: { username } });
  }
}

export default new UserRepository();