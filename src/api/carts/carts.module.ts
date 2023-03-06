import { UsersRepository } from './../users/users.repository';
import { CartsRepository } from './carts.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { CartsService } from './carts.service';
import { CartsController } from './carts.controller';
import { ProductsRepository } from '../products/products.repository';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      CartsRepository,
      ProductsRepository,
      UsersRepository,
    ]),
  ],
  controllers: [CartsController],
  providers: [CartsService],
})
export class CartsModule {}
