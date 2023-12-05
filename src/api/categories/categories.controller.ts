import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseIntPipe,
} from '@nestjs/common';
import { CategoriesService } from './categories.service';
import { CreateCategoryDto } from './dto/create-category.dto';
import { Public } from '@common/decorators/skip-auth.decorator';

@Controller('categories')
export class CategoriesController {
  constructor(private readonly categoriesService: CategoriesService) {}

  // 카테고리 등록
  @Post()
  async createCategory(@Body() createCategoryDto: CreateCategoryDto) {
    return await this.categoriesService.createCategory(createCategoryDto);
  }

  // 카테고리 목록 가져오기
  @Public()
  @Get()
  async getCategories() {
    return await this.categoriesService.getCategories();
  }

  // 카테고리 가져오기
  @Public()
  @Get('/:id')
  async getProductsByCategoryId(@Param('id', ParseIntPipe) id: number) {
    return await this.categoriesService.getProductsByCategoryId(id);
  }

  // 카테고리 정보 수정

  @Patch('/:id')
  async patchCategory(@Param('id', ParseIntPipe) id: number) {
    return await this.categoriesService.patchCategory(id);
  }

  // 카테고리 삭제

  @Delete('/:id')
  async deleteCategory(@Param('id', ParseIntPipe) id: number) {
    return await this.categoriesService.deleteCategory(id);
  }
}
