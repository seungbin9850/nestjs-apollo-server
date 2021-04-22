import { ConnectionOptions } from 'typeorm';
import config from './src/config';

const connectionOptions: ConnectionOptions = {
  type: 'mysql',
  host: config.database.host,
  port: 3306,
  username: config.database.username,
  password: config.database.password,
  database: config.database.name,
  synchronize: true,
  logging: true,
  entities: ['dist/**/*.entity.js'],
};

export default connectionOptions;
