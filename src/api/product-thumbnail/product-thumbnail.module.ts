import { ProductThumbnail } from './entities/product-thumbnail.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { ProductThumbnailService } from './product-thumbnail.service';
import { ProductThumbnailController } from './product-thumbnail.controller';

@Module({
  imports: [TypeOrmModule.forFeature([ProductThumbnail])],
  controllers: [ProductThumbnailController],
  providers: [ProductThumbnailService],
})
export class ProductThumbnailModule {}
