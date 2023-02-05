import { CreateCategoryDto } from './dto/create-category.dto';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CategoriesRepository } from './categories.repository';

@Injectable()
export class CategoriesService {
  constructor(
    @InjectRepository(CategoriesRepository)
    private categoriesRepository: CategoriesRepository,
  ) {}

  async createCategory(createCategoryDto: CreateCategoryDto) {
    const result = await this.categoriesRepository.save({
      ...createCategoryDto,
    });
    return result;
  }

  async getCategoryList() {
    const result = await this.categoriesRepository.find();
    return result;
  }

  async updateCategory(id: number) {
    throw new Error('Method not implemented.');
  }

  async deleteCategory(id: number) {
    throw new Error('Method not implemented.');
  }
}
