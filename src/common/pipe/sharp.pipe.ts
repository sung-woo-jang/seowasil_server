import { Injectable, PipeTransform } from '@nestjs/common';
import * as sharp from 'sharp';

@Injectable()
export class SharpPipe
  implements PipeTransform<Express.Multer.File, Promise<Express.Multer.File>>
{
  async transform(image: Express.Multer.File): Promise<Express.Multer.File> {
    const result = await sharp(image.buffer).resize(600, 600).toBuffer();
    image.buffer = result;
    return image;
  }
}
