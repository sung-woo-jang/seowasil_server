import { PartialType } from '@nestjs/swagger';
import { CreateProductDetailImagesDto } from './create-product-detail-images.dto';

export class UpdateProductThumbnailDto extends PartialType(
  CreateProductDetailImagesDto,
) {}
