import { Injectable, PipeTransform } from '@nestjs/common';
import * as sharp from 'sharp';

@Injectable()
export class ImageSharpPipe
  implements PipeTransform<Array<Express.Multer.File>>
{
  async transform(files: Array<Express.Multer.File>) {
    return await Promise.all(
      files.map(async (file) => {
        const resultBuffer = await sharp(file.buffer)
          .resize(600, 600)
          .toBuffer();
        file.buffer = resultBuffer;
        return file;
      }),
    );
  }
}
