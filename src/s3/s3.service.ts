import { Injectable } from '@nestjs/common';
import * as AWS from 'aws-sdk';
import { extname } from 'path';

@Injectable()
export class S3Service {
  private readonly s3: AWS.S3;
  constructor() {
    AWS.config.update({
      region: 'ap-northeast-2',
      credentials: {
        accessKeyId: process.env.AWS_ACCESS_KEY,
        secretAccessKey: process.env.AWS_SECRET_KEY,
      },
    });
    this.s3 = new AWS.S3();
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
}
