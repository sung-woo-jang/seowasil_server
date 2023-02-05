import { UpdateCategoryDto } from './dto/update-category.dto';
import { CreateCategoryDto } from './dto/create-category.dto';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CategoriesRepository } from './categories.repository';
import { Category } from './entities/category.entity';

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

  async updateCategory(updateCategoryDto: UpdateCategoryDto, id: number) {
    const result = await this.categoriesRepository
      .createQueryBuilder('category')
      .update(Category)
      .set({ ...updateCategoryDto })
      .where('id = :id', { id })
      .execute();

    return result;
  }

  async deleteCategory(id: number) {
    throw new Error('Method not implemented.');
  }
}
