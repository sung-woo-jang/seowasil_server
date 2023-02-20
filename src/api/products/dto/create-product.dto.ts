import { PickType } from '@nestjs/swagger';
import { IsNumberString } from 'class-validator';
import { Product } from '../entities/product.entity';

export class CreateProductDto extends PickType(Product, [
  'title',
  'description',
  'prevPrice',
  'sellPrice',
  'minAmount',
  'status',
] as const) {
  @IsNumberString()
  category_id: number;

  @IsNumberString()
  productImage_id: number;
}
