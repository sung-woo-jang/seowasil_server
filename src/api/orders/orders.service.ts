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

  async createOrder(createOrderDto: CreateOrderDto) {
    const result = await this.ordersRepository.save({
      ...createOrderDto,
    });
    return result;
  }

  async getOrderList() {
    const result = await this.ordersRepository.find();
    return result;
  }
}
