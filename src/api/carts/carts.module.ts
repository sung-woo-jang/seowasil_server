import { CartsRepository } from './carts.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { CartsService } from './carts.service';
import { CartsController } from './carts.controller';

@Module({
  imports: [TypeOrmModule.forFeature([CartsRepository])],
  controllers: [CartsController],
  providers: [CartsService],
})
export class CartsModule {}
