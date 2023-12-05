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
      .select([
        'product.id',
        'product.title',
        'product.description',
        'product.prevPrice',
        'product.sellPrice',
        'product.minAmount',
        'product.isBest',
        'product.status',
        'product.viewCount',
        'productImageUrl.id',
        'productImageUrl.storedFileName',
        'productDetailImageUrl.id',
        'productDetailImageUrl.storedFileName',
        'category.name',
        'category.scientific',
        'category.department',
      ])
      .leftJoin('product.productImageUrl', 'productImageUrl')
      .leftJoin('product.productDetailImageUrl', 'productDetailImageUrl')
      .leftJoin('product.category', 'category')
      .where('product.id =:id', { id })
      .getOne();
  }
  async getProductList() {
    return await this.createQueryBuilder('product')
      .select([
        'product.id',
        'product.title',
        'product.description',
        'product.prevPrice',
        'product.sellPrice',
        'product.minAmount',
        'product.isBest',
        'product.status',
        'product.viewCount',
        'productImageUrl.id',
        'productImageUrl.storedFileName',
        // 'productDetailImageUrl.id',
        // 'productDetailImageUrl.storedFileName',
        'category.name',
        'category.scientific',
        'category.department',
      ])
      .leftJoin('product.productImageUrl', 'productImageUrl')
      .leftJoin('product.productDetailImageUrl', 'productDetailImageUrl')
      .leftJoin('product.category', 'category')
      .getMany();
  }
  async getProductListByCategories(id: number) {
    return await this.createQueryBuilder('product')
      .select([
        'product.id',
        'product.title',
        'product.description',
        'product.prevPrice',
        'product.sellPrice',
        'product.minAmount',
        'product.isBest',
        'product.status',
        'product.viewCount',
        'productImageUrl.id',
        'productImageUrl.storedFileName',
        'productDetailImageUrl.id',
        'productDetailImageUrl.storedFileName',
      ])
      .leftJoin('product.productImageUrl', 'productImageUrl')
      .leftJoin('product.productDetailImageUrl', 'productDetailImageUrl')
      .where('product.id =:id', { id })
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
