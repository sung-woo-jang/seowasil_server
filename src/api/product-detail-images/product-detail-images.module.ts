import { Module } from '@nestjs/common';
import { ProductDetailImagesService } from './product-detail-images.service';
import { ProductDetailImagesController } from './product-detail-images.controller';

import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductDetailImage } from './entities/product-detail-image.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ProductDetailImage])],
  controllers: [ProductDetailImagesController],
  providers: [ProductDetailImagesService],
})
export class ProductDetailImagesModule {}
