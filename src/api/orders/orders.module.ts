import { ProductsRepository } from './../products/products.repository';
import { UsersRepository } from './../users/users.repository';
import { HttpModule } from '@nestjs/axios';
import { SmsService } from './../sms/sms.service';
import { OrdersRepository } from './orders.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { OrdersController } from './orders.controller';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      OrdersRepository,
      UsersRepository,
      ProductsRepository,
    ]),
    HttpModule,
  ],
  controllers: [OrdersController],
  providers: [OrdersService, SmsService],
})
export class OrdersModule {}
