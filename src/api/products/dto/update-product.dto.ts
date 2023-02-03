import { Status } from '../entities/product.entity';

export class UpdateProductDto {
  title: string;

  description: string;

  prevPrice: number;

  sellPrice: number;

  minAmount: number;

  status: Status;
}
