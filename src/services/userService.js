import bcrypt from 'bcrypt';
import userRepository from '#repositories/userRepository.js';

class UserService {
  async register(username, password) {
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = { username, password: hashedPassword };
    return userRepository.create(user);
  }

  async login(username, password) {
    const user = userRepository.findByUsername(username);
    if (user && (await bcrypt.compare(password, user.password))) {
      return user;
    }
    return null;
  }
}

export default new UserService();