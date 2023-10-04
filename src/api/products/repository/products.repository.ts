import { Repository } from 'typeorm';
import { HttpException, HttpStatus } from '@nestjs/common';
import { Product } from '../entities/product.entity';
import { CustomRepository } from 'src/database/repository/repository.decorator';
import { CreateProductDto } from '../dto/create-product.dto';
import { Category } from '@app/categories/entities/category.entity';

@CustomRepository(Product)
export class ProductsRepository extends Repository<Product> {
  async createProduct(
    createProductDto: CreateProductDto,
    category: Category,
  ): Promise<Product> {
    return await this.save({ ...createProductDto, category });
  }

  async getProductDetail(id: number) {
    return await this.createQueryBuilder('product')
      .leftJoinAndSelect('product.productImageUrl', 'productImageUrl')
      .leftJoinAndSelect(
        'product.productDetailImageUrl',
        'productDetailImageUrl',
      )
      .where('id =:id', { id })
      .getOne();
  }
  async getProductList() {
    return await this.createQueryBuilder('product')
      .leftJoinAndSelect('product.productImageUrl', 'productImageUrl')
      .getMany();
  }
  async updateProduct(id: number) {
    throw new HttpException(
      `Method not implemented. ${id}`,
      HttpStatus.BAD_REQUEST,
    );
  }
  async deleteProduct(id: number) {
    return await this.createQueryBuilder('product')
      .softDelete()
      .where('id = :id', { id })
      .execute();
  }
}
