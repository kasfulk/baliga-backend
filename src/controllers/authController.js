import userService from '#services/userService.js';
import authService from '#services/authService.js';

class AuthController {
  async register(req, reply) {
    const { username, password } = req.body;
    await userService.register(username, password);
    reply.code(201).send({ message: 'User registered successfully' });
  }

  async login(req, reply) {
    const { username, password } = req.body;
    const user = await userService.login(username, password);
    if (user) {
      const token = authService.generateToken({ id: user.username });
      reply.send({ token });
    } else {
      reply.code(401).send({ message: 'Invalid credentials' });
    }
  }
}

export default new AuthController();