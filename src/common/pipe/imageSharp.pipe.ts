import { Injectable, PipeTransform } from '@nestjs/common';
import { extname, join } from 'path';
import * as sharp from 'sharp';

@Injectable()
export class ImageSharpPipe
  implements
    PipeTransform<{
      productImages: Express.Multer.File[];
      detailImages: Express.Multer.File[];
    }>
{
  async transform(files: {
    productImages: Express.Multer.File[];
    detailImages: Express.Multer.File[];
  }) {
    const transformedFiles = { ...files };

    for (const field in files) {
      transformedFiles[field] = [];
      for (const [index, file] of files[field].entries()) {
        try {
          const newFileName = `${Date.now()}-${index}${extname(
            file.originalname,
          )}`;
          await sharp(file.buffer)
            .resize(600, 600)
            .toFile(join('uploads', newFileName));
          file.path = join('uploads', newFileName);
          transformedFiles[field].push(file);
        } catch (error) {
          console.error(
            `Failed to process file ${file.originalname}: ${error}`,
          );
        }
      }
    }
    return transformedFiles;
  }
}
