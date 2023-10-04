import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseIntPipe,
  UseInterceptors,
  UploadedFiles,
} from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';
import { Public } from '@common/decorators/skip-auth.decorator';
import { FileFieldsInterceptor } from '@nestjs/platform-express';
import { multerDiskOptions } from 'src/config/multer.option';
import { ImageSharpPipe } from '@common/pipe/imageSharp.pipe';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  // 상품등록
  @Post()
  @UseInterceptors(
    FileFieldsInterceptor(
      [
        { name: 'productImages', maxCount: 10 },
        { name: 'detailImages', maxCount: 10 },
      ],
      multerDiskOptions,
    ),
  )
  createProduct(
    @UploadedFiles(ImageSharpPipe)
    files: {
      productImages: Express.Multer.File[];
      detailImages: Express.Multer.File[];
    },
    @Body() createProductDto: CreateProductDto,
  ) {
    return this.productsService.createProduct(files, createProductDto);
  }

  // 상품 정보 상세보기
  @Public()
  @Get('/:id')
  getProductDetail(@Param('id', ParseIntPipe) id: number) {
    return this.productsService.getProductDetail(id);
  }

  // 상품 전체 가져오기 (페이지네이션 구현)
  @Public()
  @Get()
  getProductList() {
    return this.productsService.getProductList();
  }

  // 상품정보 수정
  @Patch('/:id')
  updateProduct(@Param('id', ParseIntPipe) id: number) {
    return this.productsService.updateProduct(id);
  }

  // 상품 삭제
  @Delete('/:id')
  deleteProduct(@Param('id', ParseIntPipe) id: number) {
    return this.productsService.deleteProduct(id);
  }
}
