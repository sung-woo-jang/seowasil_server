import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { ProductDetailImagesRepository } from './repository/product-detail-images.repository';
import { ProductsRepository } from './repository/products.repository';
import { ProductImagesRepository } from './repository/product-images.repository';
import { DataSource } from 'typeorm';
import { CategoriesRepository } from '@app/categories/categories.repository';
import { Product } from './entities/product.entity';

@Injectable()
export class ProductsService {
  constructor(
    private readonly dataSource: DataSource,
    private readonly categoriesRepository: CategoriesRepository,
    private readonly productsRepository: ProductsRepository,
    private readonly productDetailImagesRepository: ProductDetailImagesRepository,
    private readonly productImagesRepository: ProductImagesRepository,
  ) {}
  async createProduct(
    files: {
      productImages: Express.Multer.File[];
      detailImages: Express.Multer.File[];
    },
    createProductDto: CreateProductDto,
  ) {
    const category = await this.categoriesRepository.getProductsByCategoryId(
      createProductDto.categoryId,
      false,
    );

    await this.dataSource.transaction(async (manager) => {
      await manager.withRepository(this.productImagesRepository);
      await manager.withRepository(this.productDetailImagesRepository);
      throw new Error('Method not implemented.');
      const product = await manager
        .withRepository(this.productsRepository)
        .createProduct(createProductDto, category);
      console.log(product);
    });

    console.log(category);
    throw new Error('Method not implemented.');
  }
  async getProductDetail(id: number) {
    return await this.productsRepository.getProductDetail(id);
  }
  async getProductList() {
    return await this.productsRepository.getProductList();
  }
  async updateProduct(id: number) {
    return await this.productsRepository.updateProduct(id);
  }
  async deleteProduct(id: number) {
    return await this.productsRepository.deleteProduct(id);
  }
}
