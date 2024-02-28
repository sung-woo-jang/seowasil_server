import { DataSource } from 'typeorm';

export default new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'Tjddn062$',
  database: 'common',
  logging: false,
  entities: ['src/**/*.entity.ts'],
  synchronize: false, //process.env.MODE === 'dev', //! set 'false' in production
  // autoLoadEntities: true,
  // logging: process.env.MODE == 'dev',
});
