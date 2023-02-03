import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';
import { ProductThumbnailRepository } from './product-thumbnail.respsitory';

@Injectable()
export class ProductThumbnailService {
  constructor(
    @InjectRepository(ProductThumbnailRepository)
    private productThumbnailRepository: ProductThumbnailRepository,
  ) {}
}
