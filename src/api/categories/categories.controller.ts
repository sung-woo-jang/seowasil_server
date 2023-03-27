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
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';

@Controller('categories')
export class CategoriesController {
  constructor(private readonly categoriesService: CategoriesService) {}

  /**
   * @description 카테고리 등록
   */
  @Post()
  createCategory(@Body() createCategoryDto: CreateCategoryDto) {
    return this.categoriesService.createCategory(createCategoryDto);
  }

  /**
   * @description 카테고리 목록 가져오기
   */
  @Public()
  @Get()
  getCategoryList() {
    return this.categoriesService.getCategoryList();
  }

  /**
   * @description 카테고리 가져오기
   */
  @Public()
  @Get('/:id')
  getCategory(@Param('id', ParseIntPipe) id: number) {
    return this.categoriesService.getCategory(id);
  }

  /**
   * @description 카테고리 정보 수정
   */
  @Patch('/:id')
  updateCategory(
    @Body() updateCategoryDto: UpdateCategoryDto,
    @Param('id', ParseIntPipe) id: number,
  ) {
    return this.categoriesService.updateCategory(updateCategoryDto, id);
  }

  /**
   * @description 카테고리 삭제
   */
  @Delete('/:id')
  deleteCategory(@Param('id', ParseIntPipe) id: number) {
    return this.categoriesService.deleteCategory(id);
  }
}
