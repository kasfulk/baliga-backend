import authService from '#services/authService.js';

function authMiddleware(req, reply, done) {
  const token = req.headers['authorization'];
  if (token) {
    const decoded = authService.verifyToken(token.replace('Bearer ', ''));
    if (decoded) {
      req.user = decoded;
      done();
    } else {
      reply.code(401).send({ message: 'Unauthorized' });
    }
  } else {
    reply.code(401).send({ message: 'Unauthorized' });
  }
}

export default authMiddleware;