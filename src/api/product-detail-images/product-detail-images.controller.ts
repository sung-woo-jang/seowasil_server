import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ProductDetailImagesService } from './product-detail-images.service';
import { CreateProductDetailImageDto } from './dto/create-product-detail-image.dto';
import { UpdateProductDetailImageDto } from './dto/update-product-detail-image.dto';

@Controller('product-detail-images')
export class ProductDetailImagesController {
  constructor(
    private readonly productDetailImagesService: ProductDetailImagesService,
  ) {}
  // 상품 상세 사진 저장
  /* 
  - 이미지 sharp
  - 이미지 파일 시스템 저장
  - 이미지 이름 DB저장
  */
}
