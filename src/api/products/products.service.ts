import { CreateProductDto } from './dto/create-product.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';
import { ProductsRepository } from './products.repository';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(ProductsRepository)
    private productsRepository: ProductsRepository,
  ) {}

  async createProduct(createProductDto: CreateProductDto) {
    return await this.productsRepository.save({ ...createProductDto });
  }

  async getProductDetail(id: number) {
    const board = await this.productsRepository.findOne(id);
    board.viewCount++;
    return await this.productsRepository.save({ ...board });
  }

  async getProductList() {
    return await this.productsRepository.find({
      select: ['title', 'description'],
    });
  }
}
