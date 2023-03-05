import { ProductImageRepository } from './../product-images/product-images.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductsController } from './products.controller';
import { ProductsRepository } from './products.repository';
import { CategoriesRepository } from '../categories/categories.repository';
import { ProductThumbnailRepository } from '../product-thumbnail/product-thumbnail.respsitory';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      ProductsRepository,
      CategoriesRepository,
      ProductImageRepository,
      ProductThumbnailRepository,
    ]),
  ],
  controllers: [ProductsController],
  providers: [ProductsService],
})
export class ProductsModule {}
