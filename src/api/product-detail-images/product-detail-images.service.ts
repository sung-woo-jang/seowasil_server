import { Injectable } from '@nestjs/common';
import { S3Service } from '../../s3/s3.service';
import { InjectRepository } from '@nestjs/typeorm';
import { ProductDetailImagesRepository } from './product-detail-images.respsitory';

@Injectable()
export class ProductDetailImagesService {
  constructor(
    @InjectRepository(ProductDetailImagesRepository)
    private productDetailImagesRepository: ProductDetailImagesRepository,
    private s3Service: S3Service,
  ) {}

  async uploadProductThumbnailImage(files: Array<Express.Multer.File>) {
    const imageUrl = [];
    await Promise.all(
      files.map(async (file: Express.Multer.File, idx: number) => {
        const key = await this.s3Service.uploadImageToAWS_s3(file, idx);
        imageUrl.push(key);
      }),
    );
    const result =
      await this.productDetailImagesRepository.registerDetailImagesUrl(
        imageUrl,
      );
    return result;
  }
}
