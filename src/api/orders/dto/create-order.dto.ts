import { PickType } from '@nestjs/swagger';
import { Order } from '../entities/order.entity';

export class CreateOrderDto extends PickType(Order, [
  'name',
  'phoneNumber',
  'deliveryRequest',
  'address1',
  'address2',
  'address3',
  'amount',
  'price',
] as const) {
  user_id: number;

  product_id: number;
}
