import {
  Controller,
  Post,
  UploadedFiles,
  UseInterceptors,
} from '@nestjs/common';
import { FilesInterceptor } from '@nestjs/platform-express';
import { Public } from 'src/common/decorators/skip-auth.decorator';
import { SharpPipe } from 'src/common/pipe/sharp.pipe';
import { ProductImagesService } from './product-images.service';

@Controller('product-images')
export class ProductImagesController {
  constructor(private readonly productImagesService: ProductImagesService) {}

  // 이미지를 먼저 서버에 업로드를 시킨다.
  // 게시물 정보를 입력하고 저장을 한다.
  // 이미지와 게시물을 연결시켜준다.

  @Post()
  @Public()
  @UseInterceptors(FilesInterceptor('files', 10))
  async uploadProductImage(
    @UploadedFiles(SharpPipe) files: Array<Express.Multer.File>,
  ) {
    return await this.productImagesService.uploadProductImage(files);
  }
}
