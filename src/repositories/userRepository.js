const users = [];

class UserRepository {
  create(user) {
    users.push(user);
    return user;
  }

  findByUsername(username) {
    return users.find((user) => user.username === username);
  }
}

export default new UserRepository();