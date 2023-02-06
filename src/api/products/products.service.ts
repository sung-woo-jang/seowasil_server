import { CategoriesRepository } from './../categories/categories.repository';
import { UpdateProductDto } from './dto/update-product.dto';
import { CreateProductDto } from './dto/create-product.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';
import { ProductsRepository } from './products.repository';
import { Product } from './entities/product.entity';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(ProductsRepository)
    private productsRepository: ProductsRepository,
    @InjectRepository(CategoriesRepository)
    private categoriesRepository: CategoriesRepository,
  ) {}

  async createProduct(createProductDto: CreateProductDto) {
    const category = await this.categoriesRepository.findOne({
      id: createProductDto.category_id,
    });
    return await this.productsRepository.save({
      ...createProductDto,
      category,
    });
  }

  async getProductDetail(id: number) {
    const board = await this.productsRepository.findOne(id);
    board.viewCount++;
    return await this.productsRepository.save({ ...board });
  }

  async getProductList() {
    return await this.productsRepository.find({
      select: ['title', 'description'],
      relations: ['category_id'],
    });
  }

  async updateProduct(updateProductDto: UpdateProductDto, id: number) {
    const board = await this.productsRepository
      .createQueryBuilder('product')
      .update(Product)
      .set({ ...updateProductDto })
      .where('id = :id', { id })
      .execute();
    return board;
  }

  async deleteProduct(id: number) {
    return await this.productsRepository.softDelete(id);
  }

  async restoreProduct(id: number) {
    return await this.productsRepository.restore(id);
  }
}
