import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}
  // 상품등록
  // 상품 정보 상세보기
  // 상품 전체 가져오기
  // 상품정보 수정
  // 상품 삭제
  // 삭제 상품 복구
}
