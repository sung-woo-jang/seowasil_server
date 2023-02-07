import { ProductImageRepository } from './product-images.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';

@Module({
  imports: [TypeOrmModule.forFeature([ProductImageRepository])],
})
export class ProductImagesModule {}
