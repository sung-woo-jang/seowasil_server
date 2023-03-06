import { IsNumber } from 'class-validator';
import { PickType } from '@nestjs/swagger';
import { Cart } from '../entities/cart.entity';
import { Transform } from 'class-transformer';

export class CreateCartDto extends PickType(Cart, ['amount'] as const) {
  @Transform(({ value }) => Number(value))
  @IsNumber()
  user_id: number;

  @Transform(({ value }) => Number(value))
  @IsNumber()
  product_id: number;
}
