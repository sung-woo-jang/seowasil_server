import { CreateOrderDto } from './dto/create-order.dto';
import { Order } from './entities/order.entity';
import { EntityRepository, Repository } from 'typeorm';

@EntityRepository(Order)
export class OrdersRepository extends Repository<Order> {
  async createOrder(createOrderDto: CreateOrderDto) {
    const result = await this.save({
      ...createOrderDto,
    });
    if (result) {
      console.log(result);
    }
    return result;
  }
}
