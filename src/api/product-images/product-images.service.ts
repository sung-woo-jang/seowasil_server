import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';
import { ProductImageRepository } from './product-images.repository';

@Injectable()
export class ProductImagesService {
  constructor(
    @InjectRepository(ProductImageRepository)
    private productImageRepository: ProductImageRepository,
  ) {}

  async uploadImg(files: Express.Multer.File[]) {
    const fileName = [];
    files.forEach((el) => fileName.push(`${el.filename}`));
    const result = await this.productImageRepository.findByIdAndUpdateImg(
      fileName,
    );
    return result;
  }
}
