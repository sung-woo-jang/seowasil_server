import { UpdateProductDto } from './dto/update-product.dto';
import { Public } from './../../common/decorators/skip-auth.decorator';
import {
  Controller,
  Post,
  Get,
  Patch,
  Delete,
  Body,
  Param,
  ParseIntPipe,
} from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  /**
   * @description 상품 등록
   */
  @Post()
  async createProduct(@Body() createProductDto: CreateProductDto) {
    const product = await this.productsService.createProduct(createProductDto);

    return product;
  }

  /**
   * @description 상품 정보 상세보기
   */
  @Public()
  @Get('/:id')
  getProductDetail(@Param('id', ParseIntPipe) id: number) {
    return this.productsService.getProductDetail(id);
  }

  /**
   * @description 상품 가져오기
   * @Query (sort: 정렬)
   * @Query (search: 제목 키워드)
   * @Query (filter: 해시태그 키워드)
   * @Query (pagination: 페이지)
   */
  @Public()
  @Get()
  getProductList() {
    return this.productsService.getProductList();
  }

  /**
   * @description 상품 정보 수정
   */
  @Patch('/:id')
  updateProduct(
    @Body() updateProductDto: UpdateProductDto,
    @Param('id', ParseIntPipe) id: number,
  ) {
    return this.productsService.updateProduct(updateProductDto, id);
  }

  /**
   * @description 상품 삭제
   */
  @Delete('/:id')
  deleteProduct(@Param('id', ParseIntPipe) id: number) {
    return this.productsService.deleteProduct(id);
  }

  /**
   * @description 삭제된 상품 복구
   */
  @Patch('/restore/:id')
  restoreProduct(@Param('id', ParseIntPipe) id: number) {
    return this.productsService.restoreProduct(id);
  }
}
