import { ArraySharpPipe } from './../../common/pipe/arraySharp.pipe';
import { ProductDetailImagesService } from './product-detail-images.service';
import {
  Controller,
  Post,
  UploadedFiles,
  UseInterceptors,
} from '@nestjs/common';
import { FilesInterceptor } from '@nestjs/platform-express';

@Controller('product-detail-images')
export class ProductDetailImagesController {
  constructor(
    private readonly productDetailImagesService: ProductDetailImagesService,
  ) {}

  @Post()
  @UseInterceptors(FilesInterceptor('files', 10))
  async uploadProductThumbnailImage(
    @UploadedFiles(ArraySharpPipe) files: Array<Express.Multer.File>,
  ) {
    return await this.productDetailImagesService.uploadProductThumbnailImage(
      files,
    );
  }
}
