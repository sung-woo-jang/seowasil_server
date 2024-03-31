import { DataSource } from 'typeorm';

export default new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'Tjddn062$',
  database: 'common',
  logging: true,
  entities: ['src/**/*.entity.ts'],
  synchronize: true, //process.env.MODE === 'dev', //! set 'false' in production
  // autoLoadEntities: true,
  // logging: process.env.MODE == 'dev',
});
