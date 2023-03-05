import { S3Service } from './../s3/s3.service';
import { ProductThumbnailRepository } from './product-thumbnail.respsitory';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { ProductThumbnailController } from './product-thumbnail.controller';
import { ProductThumbnailService } from './product-thumbnail.service';

@Module({
  imports: [TypeOrmModule.forFeature([ProductThumbnailRepository])],
  controllers: [ProductThumbnailController],
  providers: [ProductThumbnailService, S3Service],
})
export class ProductThumbnailModule {}
