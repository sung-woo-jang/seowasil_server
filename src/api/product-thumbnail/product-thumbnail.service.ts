import { Injectable } from '@nestjs/common';
import { S3Service } from '../s3/s3.service';
import { InjectRepository } from '@nestjs/typeorm';
import { ProductThumbnailRepository } from './product-thumbnail.respsitory';

@Injectable()
export class ProductThumbnailService {
  constructor(
    @InjectRepository(ProductThumbnailRepository)
    private productThumbnailRepository: ProductThumbnailRepository,
    private s3Service: S3Service,
  ) {}

  async uploadProductThumbnailImage(file: Express.Multer.File) {
    const key = await this.s3Service.uploadImageToAWS_s3(file, 0);
    const result =
      await this.productThumbnailRepository.registerThumbnailImageUrl(key);
    return result;
  }
}
