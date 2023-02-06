import { PickType } from '@nestjs/swagger';
import { IsNumber } from 'class-validator';
import { Product } from '../entities/product.entity';

export class CreateProductDto extends PickType(Product, [
  'title',
  'description',
  'prevPrice',
  'sellPrice',
  'minAmount',
  'status',
] as const) {
  @IsNumber()
  category_id: number;
}
