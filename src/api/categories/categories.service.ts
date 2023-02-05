import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CategoriesRepository } from './categories.repository';

@Injectable()
export class CategoriesService {
  constructor(
    @InjectRepository(CategoriesRepository)
    private categoriesRepository: CategoriesRepository,
  ) {}

  createCategory() {
    throw new Error('Method not implemented.');
  }

  getCategoryList() {
    throw new Error('Method not implemented.');
  }

  updateCategory(id: number) {
    throw new Error('Method not implemented.');
  }

  deleteCategory(id: number) {
    throw new Error('Method not implemented.');
  }
}
