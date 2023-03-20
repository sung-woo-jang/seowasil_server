import { S3Service } from '../s3/s3.service';
import { ProductDetailImagesRepository } from './product-detail-images.respsitory';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { ProductDetailImagesController } from './product-detail-images.controller';
import { ProductDetailImagesService } from './product-detail-images.service';

@Module({
  imports: [TypeOrmModule.forFeature([ProductDetailImagesRepository])],
  controllers: [ProductDetailImagesController],
  providers: [ProductDetailImagesService, S3Service],
})
export class ProductDetailImagesModule {}
