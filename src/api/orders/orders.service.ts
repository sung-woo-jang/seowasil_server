import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';
import { OrdersRepository } from './orders.repository';
import { CreateOrderDto } from './dto/create-order.dto';

@Injectable()
export class OrdersService {
  constructor(
    @InjectRepository(OrdersRepository)
    private ordersRepository: OrdersRepository,
  ) {}

  createOrder(createOrderDto: CreateOrderDto) {
    throw new Error('Method not implemented.');
  }

  getOrderList() {
    throw new Error('Method not implemented.');
  }
}
