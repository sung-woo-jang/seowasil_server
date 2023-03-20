import { ProductDetailImagesRepository } from './../product-detail-images/product-detail-images.respsitory';
import { ProductImageRepository } from './../product-images/product-images.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductsController } from './products.controller';
import { ProductsRepository } from './products.repository';
import { CategoriesRepository } from '../categories/categories.repository';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      ProductsRepository,
      CategoriesRepository,
      ProductImageRepository,
      ProductDetailImagesRepository,
    ]),
  ],
  controllers: [ProductsController],
  providers: [ProductsService],
})
export class ProductsModule {}
