import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmAsyncModuleOptions } from 'src/config/typeorm.config';

@Module({
  imports: [TypeOrmModule.forRootAsync(typeOrmAsyncModuleOptions)],
})
export class DatabaseModule {}
