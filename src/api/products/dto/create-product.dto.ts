import { Transform } from 'class-transformer';
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
  @Transform(({ value }) => Number(value))
  @IsNumber()
  category_id: number;

  @Transform(({ value }) => Number(value))
  @IsNumber()
  productImage_id: number;

  @Transform(({ value }) => Number(value))
  @IsNumber()
  productDetailImage_id: number;
}
