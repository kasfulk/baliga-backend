import jwt from 'jsonwebtoken';

const SECRET_KEY = 'your-secret-key'; // In a real app, use an environment variable

class AuthService {
  generateToken(payload) {
    return jwt.sign(payload, SECRET_KEY, { expiresIn: '1h' });
  }

  verifyToken(token) {
    try {
      return jwt.verify(token, SECRET_KEY);
    } catch (err) {
      return null;
    }
  }
}

export default new AuthService();