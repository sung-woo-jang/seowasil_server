import { PickType } from '@nestjs/swagger';
import { Product } from '../entities/product.entity';

export class CreateProductDto extends PickType(Product, [
  'title',
  'description',
  'prevPrice',
  'sellPrice',
  'minAmount',
] as const) {
  categoryId: number;
}
