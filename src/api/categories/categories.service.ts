import {
  ConflictException,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import { DataSource } from 'typeorm';
import { CreateCategoryDto } from './dto/create-category.dto';
import { CategoriesRepository } from './categories.repository';
import { Category } from './entities/category.entity';

@Injectable()
export class CategoriesService {
  constructor(
    private readonly dataSource: DataSource,
    private readonly categoriesRepository: CategoriesRepository,
  ) {}

  async createCategory(createCategoryDto: CreateCategoryDto) {
    const queryRunner = this.dataSource.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction();
    let result: Category;
    try {
      result = await queryRunner.manager
        .getRepository(Category)
        .save(createCategoryDto);

      await queryRunner.commitTransaction();
    } catch (error) {
      // console.error(error);
      await queryRunner.rollbackTransaction();
      if (error.code === '23505') {
        throw new ConflictException('중복된 이름입니다.');
      } else {
        throw new InternalServerErrorException();
      }
    } finally {
      await queryRunner.release();
    }
    return result;
  }
  getCategories() {
    return this.categoriesRepository.getCategories();
  }
  getProductsByCategoryId(id: number) {
    return this.categoriesRepository.getProductsByCategoryId(id, true);
  }
  patchCategory(id: number) {
    return this.categoriesRepository.patchCategory(id);
  }
  deleteCategory(id: number) {
    return this.categoriesRepository.deleteCategory(id);
  }
}
