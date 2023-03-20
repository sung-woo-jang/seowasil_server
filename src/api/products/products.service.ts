import { CategoriesRepository } from './../categories/categories.repository';
import { UpdateProductDto } from './dto/update-product.dto';
import { CreateProductDto } from './dto/create-product.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';
import { ProductsRepository } from './products.repository';
import { Product } from './entities/product.entity';
import { ProductImageRepository } from '../product-images/product-images.repository';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(ProductsRepository)
    private productsRepository: ProductsRepository,
    @InjectRepository(CategoriesRepository)
    private categoriesRepository: CategoriesRepository,
    @InjectRepository(ProductImageRepository)
    private productImageRepository: ProductImageRepository,
  ) {}

  async createProduct(createProductDto: CreateProductDto): Promise<Product> {
    const category = await this.categoriesRepository.findOne({
      id: createProductDto.category_id,
    });

    const productImageUrl = await this.productImageRepository.findOne({
      id: createProductDto.productImage_id,
    });

    const product = await this.productsRepository.save({
      ...createProductDto,
      category,
      productImageUrl,
    });

    return this.productsRepository.getProductDetail(product.id);
  }

  async getProductDetail(id: number) {
    return await this.productsRepository.getProductDetail(id);
  }

  async getProductList() {
    return await this.productsRepository.getProductList();
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
    return await this.productsRepository.delete(id);
  }

  async restoreProduct(id: number) {
    return await this.productsRepository.restore(id);
  }
}
