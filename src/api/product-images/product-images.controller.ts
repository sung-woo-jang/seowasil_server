import {
  Controller,
  Post,
  UploadedFiles,
  UseInterceptors,
} from '@nestjs/common';
import { FilesInterceptor } from '@nestjs/platform-express';
import { Public } from 'src/common/decorators/skip-auth.decorator';
import { multerDiskOptions } from 'src/common/utils/multer.options';
import { ProductImagesService } from './product-images.service';

@Public()
@Controller('product-images')
export class ProductImagesController {
  constructor(private readonly productImagesService: ProductImagesService) {}

  /**
   * @description 디스크 방식 파일 업로드 (2)-> Destination 옵션 미설정
   *
   * @param {File[]} files 다중 파일
   * @param  user_id 유저 아이디
   * @param res Response 객체
   */
  @Post('/upload')
  @UseInterceptors(FilesInterceptor('files', 10, multerDiskOptions))
  uploadFileDiskDestination(
    @UploadedFiles() files: Array<Express.Multer.File>,
  ) {
    return this.productImagesService.uploadImg(files);
  }
}
