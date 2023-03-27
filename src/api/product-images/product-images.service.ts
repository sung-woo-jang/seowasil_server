import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ProductImageRepository } from './product-images.repository';
import { S3Service } from '../../s3/s3.service';

@Injectable()
export class ProductImagesService {
  constructor(
    @InjectRepository(ProductImageRepository)
    private productImageRepository: ProductImageRepository,
    private s3Service: S3Service,
  ) {}

  async uploadProductImage(files: Array<Express.Multer.File>) {
    const imageUrl = [];
    await Promise.all(
      files.map(async (file: Express.Multer.File, idx: number) => {
        const key = await this.s3Service.uploadImageToAWS_s3(file, idx);
        imageUrl.push(key);
      }),
    );
    const result = await this.productImageRepository.registerImageUrl(imageUrl);
    return result;
  }
}
