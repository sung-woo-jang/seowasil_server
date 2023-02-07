import {
  Controller,
  Post,
  UploadedFiles,
  UseInterceptors,
} from '@nestjs/common';
import { FilesInterceptor } from '@nestjs/platform-express';
import { SharpPipe } from 'src/common/pipe/sharp.pipe';
import { ProductImagesService } from './product-images.service';

@Controller('product-images')
export class ProductImagesController {
  constructor(private readonly productImagesService: ProductImagesService) {}

  @Post('/upload')
  @UseInterceptors(FilesInterceptor('files', 10))
  async uploadFileDiskDestination(
    @UploadedFiles(SharpPipe) files: Array<Express.Multer.File>,
  ) {
    const imgurl: string[] = [];
    await Promise.all(
      files.map(async (file: Express.Multer.File, idx: number) => {
        const key = await this.productImagesService.uploadImg(file, idx);
        imgurl.push(`${key}`);
      }),
    );

    const result = this.productImagesService.registerImageUrl(imgurl);

    return result;
  }
}
