import { ProductThumbnailRepository } from './product-thumbnail.respsitory';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';

@Module({
  imports: [TypeOrmModule.forFeature([ProductThumbnailRepository])],
})
export class ProductThumbnailModule {}
