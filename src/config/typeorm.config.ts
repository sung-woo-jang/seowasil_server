import { ConfigService } from '@nestjs/config';
import {
  TypeOrmModuleAsyncOptions,
  TypeOrmModuleOptions,
} from '@nestjs/typeorm';
import { SnakeNamingStrategy } from 'typeorm-naming-strategies';

export const typeOrmAsyncModuleOptions: TypeOrmModuleAsyncOptions = {
  inject: [ConfigService],
  useFactory: async (): Promise<TypeOrmModuleOptions> => ({
    namingStrategy: new SnakeNamingStrategy(),
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'Tjddn062$',
    database: 'common',
    logging: false,
    entities: [__dirname + '/../**/*.entity.{js,ts}'],
    synchronize: true, //process.env.MODE === 'dev', //! set 'false' in production
    // autoLoadEntities: true,
    // logging: process.env.MODE == 'dev',
  }),
};
