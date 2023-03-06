import { PickType } from '@nestjs/swagger';
import { Order } from '../entities/order.entity';

export class CreateOrderDto extends PickType(Order, [
  'address1',
  'address2',
  'address3',
  'deliveryRequest',
  'amount',
  'price',
] as const) {}
