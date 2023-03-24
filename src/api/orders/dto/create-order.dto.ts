import { Transform } from 'class-transformer';
import { PickType } from '@nestjs/swagger';
import { Order } from '../entities/order.entity';

export class CreateOrderDto extends PickType(Order, [
  'price',
  'name',
  'phoneNumber',
  'amount',
  'deliveryRequest',
  'address1',
  'address2',
  'address3',
] as const) {
  @Transform(({ value }) => Number(value))
  user_id: number;

  @Transform(({ value }) => Number(value))
  product_id: number;
}
