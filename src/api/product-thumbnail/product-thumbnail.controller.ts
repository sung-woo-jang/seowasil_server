import { Controller } from '@nestjs/common';
import { ProductThumbnailService } from './product-thumbnail.service';

@Controller('product-thumbnail')
export class ProductThumbnailController {
  constructor(
    private readonly productThumbnailService: ProductThumbnailService,
  ) {}
}
