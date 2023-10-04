import { Module } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductsController } from './products.controller';
import { ProductDetailImagesRepository } from './repository/product-detail-images.repository';
import { ProductsRepository } from './repository/products.repository';
import { ProductImagesRepository } from './repository/product-images.repository';
import { CategoriesRepository } from '@app/categories/categories.repository';
import { RepositoryModule } from 'src/database/repository/repository.module';

@Module({
  imports: [
    RepositoryModule.forCustomRepository([
      ProductsRepository,
      ProductDetailImagesRepository,
      ProductImagesRepository,
      CategoriesRepository,
    ]),
  ],
  controllers: [ProductsController],
  providers: [ProductsService],
})
export class ProductsModule {}
