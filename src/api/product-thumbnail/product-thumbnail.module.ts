import { ProductThumbnailRepository } from './product-thumbnail.respsitory';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { ProductThumbnailService } from './product-thumbnail.service';
import { ProductThumbnailController } from './product-thumbnail.controller';

@Module({
  imports: [TypeOrmModule.forFeature([ProductThumbnailRepository])],
  controllers: [ProductThumbnailController],
  providers: [ProductThumbnailService],
})
export class ProductThumbnailModule {}
