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
  createProduct(@Body() createProductDto: CreateProductDto) {
    return this.productsService.createProduct(createProductDto);
  }

  /**
   * @description 상품 정보 상세보기
   */
  @Get('/:id')
  @Public()
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

  /* 
  상품 정보 수정
  @Patch('/:id')
  updateProduct(@Body() 상품등록DTO, @Param() id:number){
    return ''    
  }
  */

  /* 
  상품 삭제
  @Delete('/:id')
  deleteProduct(@Body() 제목, 내용, 해시태그, @Param()){
    TODO: 게시글 SoftDelete
  }
  
  하나로 합치는 쪽으로 구현
  삭제된 게시글 복구
  @Post('/:id')
  restorationProduct(@Body() 제목, 내용, 해시태그){
    TODO: Body내용 원본이랑 교체
    return ''    
  }
  */
}
