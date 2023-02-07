import { extname } from 'path';
import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';
import { ProductImageRepository } from './product-images.repository';
import * as AWS from 'aws-sdk';

@Injectable()
export class ProductImagesService {
  private readonly s3;
  constructor(
    @InjectRepository(ProductImageRepository)
    private productImageRepository: ProductImageRepository,
  ) {
    AWS.config.update({
      region: 'ap-northeast-2',
      credentials: {
        accessKeyId: process.env.AWS_ACCESS_KEY,
        secretAccessKey: process.env.AWS_SECRET_KEY,
      },
    });
    this.s3 = new AWS.S3();
  }

  async uploadImg(file: Express.Multer.File, idx: number): Promise<string> {
    const key = `${Date.now()}-${idx}${extname(file.originalname)}`;
    const params = {
      Bucket: process.env.AWS_S3_BUCKET_NAME,
      ACL: 'private',
      Key: key,
      Body: file.buffer,
    };

    return new Promise((resolve, reject) => {
      this.s3.putObject(params, (err) => {
        if (err) reject(err);
        resolve(key);
      });
    });
  }

  async registerImageUrl(imgurl: string[]) {
    const result = await this.productImageRepository
      .create({
        storedFileName: imgurl,
      })
      .save();
    return result;
  }
}
