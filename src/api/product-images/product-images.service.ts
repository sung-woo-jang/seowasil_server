import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';
import { ProductImageRepository } from './product-images.repository';

@Injectable()
export class ProductImagesService {
  constructor(
    @InjectRepository(ProductImageRepository)
    private productImageRepository: ProductImageRepository,
  ) {}
}
