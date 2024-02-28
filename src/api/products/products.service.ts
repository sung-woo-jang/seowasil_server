import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { ProductDetailImagesRepository } from './repository/product-detail-images.repository';
import { ProductsRepository } from './repository/products.repository';
import { ProductImagesRepository } from './repository/product-images.repository';
import { DataSource } from 'typeorm';
import { CategoriesRepository } from '@app/categories/categories.repository';

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
    const product = await this.dataSource.transaction(async (manager) => {
      const product = await manager
        .withRepository(this.productsRepository)
        .createProduct(createProductDto, category);
      await manager
        .withRepository(this.productImagesRepository)
        .createProductImage(files.productImages, product);
      await manager
        .withRepository(this.productDetailImagesRepository)
        .createProductDetailImage(files.detailImages, product);
      return product;
    });
    const result = await this.getProductDetail(product.id);
    return result;
  }
  async getProductDetail(id: number) {
    return await this.productsRepository.getProductDetail(id);
  }
  async getProductList() {
    const result = await this.productsRepository.getProductList();

    return result;
  }
  async getProductListByCategories(id: number) {
    return await this.productsRepository.getProductListByCategories(id);
  }
  async updateProduct(id: number) {
    return await this.productsRepository.updateProduct(id);
  }
  async deleteProduct(id: number) {
    return await this.productsRepository.deleteProduct(id);
  }
}
