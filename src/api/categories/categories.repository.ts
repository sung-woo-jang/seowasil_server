import { Repository } from 'typeorm';
import { HttpException, HttpStatus } from '@nestjs/common';
import { Category } from './entities/category.entity';
import { CustomRepository } from 'src/database/repository/repository.decorator';

@CustomRepository(Category)
export class CategoriesRepository extends Repository<Category> {
  async getCategories() {
    return await this.createQueryBuilder('category').getOne();
  }

  async getProductsByCategoryId(id: number, products: boolean) {
    return await this.findOne({
      relations: { products },
      where: {
        id,
      },
    });
  }

  async patchCategory(id: number) {
    throw new HttpException(
      `Method not implemented. ${id}`,
      HttpStatus.BAD_REQUEST,
    );
  }

  async deleteCategory(id: number) {
    return await this.createQueryBuilder('category')
      .softDelete()
      .where('id = :id', { id })
      .execute();
  }
}
