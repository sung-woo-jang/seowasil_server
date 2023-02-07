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
  /**
   * @description 임시로 만든 API: 지울예정(컨트롤러 자체를 지울지도)
   */
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

    // const result = this.productImagesService.registerImageUrl(imgurl);

    // return result;
  }
}
