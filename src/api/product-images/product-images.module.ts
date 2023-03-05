import { ProductImageRepository } from './product-images.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { ProductImagesController } from './product-images.controller';
import { ProductImagesService } from './product-images.service';
import { S3Service } from '../s3/s3.service';

@Module({
  imports: [TypeOrmModule.forFeature([ProductImageRepository])],
  controllers: [ProductImagesController],
  providers: [ProductImagesService, S3Service],
})
export class ProductImagesModule {}
