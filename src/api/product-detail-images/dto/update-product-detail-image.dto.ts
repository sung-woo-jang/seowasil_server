import { PartialType } from '@nestjs/swagger';
import { CreateProductDetailImageDto } from './create-product-detail-image.dto';

export class UpdateProductDetailImageDto extends PartialType(CreateProductDetailImageDto) {}
