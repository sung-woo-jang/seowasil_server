import { Public } from './../../common/decorators/skip-auth.decorator';
import { ImageDetailSharpPipe } from '../../common/pipe/imageDetailSharp.pipe';
import { ProductDetailImagesService } from './product-detail-images.service';
import {
  Controller,
  Post,
  UploadedFiles,
  UseInterceptors,
} from '@nestjs/common';
import { FilesInterceptor } from '@nestjs/platform-express';

@Public()
@Controller('product-detail-images')
export class ProductDetailImagesController {
  constructor(
    private readonly productDetailImagesService: ProductDetailImagesService,
  ) {}

  @Post()
  @UseInterceptors(FilesInterceptor('files', 10))
  async uploadProductThumbnailImage(
    @UploadedFiles(ImageDetailSharpPipe) files: Array<Express.Multer.File>,
  ) {
    return await this.productDetailImagesService.uploadProductThumbnailImage(
      files,
    );
  }
}
