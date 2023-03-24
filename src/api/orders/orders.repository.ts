import { CreateOrderDto } from './dto/create-order.dto';
import { Order } from './entities/order.entity';
import { EntityRepository, Repository } from 'typeorm';

@EntityRepository(Order)
export class OrdersRepository extends Repository<Order> {
  async createOrder(createOrderDto: CreateOrderDto) {
    const result = await this.save({
      ...createOrderDto,
    });

    return result;
  }

  async getOrderList() {
    const query = this.createQueryBuilder('order').leftJoinAndSelect(
      'order.product',
      'product',
    );

    const result = await query
      .select([
        'order.id',
        'order.name',
        'order.phoneNumber',
        'order.deliveryRequest',
        'order.address1',
        'order.address2',
        'order.address3',
        'order.amount',
        'order.price',
        'product.title',
      ])
      .orderBy('order.createdAt', 'ASC')
      .getMany();

    return result;
  }
}
