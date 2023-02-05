import {
  Controller,
  Post,
  Get,
  Patch,
  Param,
  ParseIntPipe,
  Delete,
  Body,
} from '@nestjs/common';
import { Public } from 'src/common/decorators/skip-auth.decorator';
import { CategoriesService } from './categories.service';

@Public()
@Controller('categories')
export class CategoriesController {
  constructor(private readonly categoriesService: CategoriesService) {}

  /**
   * @description 카테고리 등록
   */
  @Post()
  createCatrgory() {
    // @Body() 카테고리 생성DTO
    return this.categoriesService.createCategory();
  }

  /**
   * @description 카테고리 가져오기
   */
  @Get()
  getCatrgoryList() {
    return this.categoriesService.getCategoryList();
  }

  /**
   * @description 카테고리 정보 수정
   */
  @Patch('/:id')
  updateCategory(
    // @Body() 카테고리 수정 DTO
    @Param('id', ParseIntPipe) id: number,
  ) {
    return this.categoriesService.updateCategory(id);
  }

  /**
   * @description 카테고리 삭제
   */
  @Delete('/:id')
  deleteCategory(@Param('id', ParseIntPipe) id: number) {
    return this.categoriesService.deleteCategory(id);
  }
}
