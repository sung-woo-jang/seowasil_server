import { Repository } from 'typeorm';
import { HttpException, HttpStatus } from '@nestjs/common';
import { Category } from './entities/category.entity';
import { CustomRepository } from 'src/database/repository/repository.decorator';

@CustomRepository(Category)
export class CategoriesRepository extends Repository<Category> {
  async getCategories() {
    return await this.createQueryBuilder('category').getMany();
  }

  async getProductsByCategoryId(id: number, products: boolean) {
    return await this.createQueryBuilder('category')
      .select([
        'category.id',
        'category.name',
        'category.scientific',
        'category.department',

        'product.id',
        'product.title',
        'product.description',
        'product.prevPrice',
        'product.sellPrice',
        'product.minAmount',

        'productImageUrl.id',
        'productImageUrl.storedFileName',
      ])
      .leftJoin('category.products', 'product')
      .leftJoin('product.productImageUrl', 'productImageUrl')
      .leftJoin('product.productDetailImageUrl', 'productDetailImageUrl')
      .where('category.id =:id', { id })
      .getOne();
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
