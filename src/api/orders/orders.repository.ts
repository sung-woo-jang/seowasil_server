import { Repository } from 'typeorm';
import { Order } from './entities/order.entity';
import { CustomRepository } from 'src/database/repository/repository.decorator';

@CustomRepository(Order)
export class OrdersRepository extends Repository<Order> {}
