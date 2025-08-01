import 'dotenv/config';
import { Sequelize } from 'sequelize';

const env = process.env.NODE_ENV || 'development';
const config = {
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  host: process.env.DB_HOST,
  dialect: 'mysql',
};

const sequelize = new Sequelize({ ...config, ...config[env] });

export default sequelize;
