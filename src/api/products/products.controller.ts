import { Controller, Post, Get, Patch, Delete, Body } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Post()
  async createProduct(@Body() createProductDto: CreateProductDto) {
    return await this.productsService.createProduct(createProductDto);
  }

  /* 
  상품 정보 상세보기
  @Get("/:id")
  @Public()
  getProductDetail(){
    TODO: 게시글 상세보기 호출 시 조회수 증가
    return ''    
  }
  */

  /* 
  상품 리스트 가져오기
  @Query(sort: 정렬)
  @Query(search: 제목 키워드)
  @Query(filter: 해시태그 키워드)
  @Query(pagination: 페이지)
  @Public()
  @Get()
  getProductList(){
    return {title, description}
    return ''    
  }
  */

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
