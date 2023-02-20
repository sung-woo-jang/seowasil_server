import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ProductImageRepository } from './product-images.repository';
import * as AWS from 'aws-sdk';
import { extname } from 'path';

@Injectable()
export class ProductImagesService {
  private readonly s3: AWS.S3;
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
  async uploadProductImage(files: Array<Express.Multer.File>) {
    const imageUrl = [];
    await Promise.all(
      files.map(async (file: Express.Multer.File, idx: number) => {
        const key = await this.uploadImageToAWS_s3(file, idx);
        imageUrl.push(key);
      }),
    );
    const result = await this.registerImageUrl(imageUrl);
    return result;
  }

  async uploadImageToAWS_s3(
    file: Express.Multer.File,
    idx: number,
  ): Promise<string> {
    const key = `${idx}-${Date.now()}${extname(file.originalname)}`;
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
        // product_id 로 product 가져와서 넣어주기.
      })
      .save();
    return result;
  }
}
