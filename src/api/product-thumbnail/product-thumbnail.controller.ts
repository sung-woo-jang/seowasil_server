import { ProductThumbnailService } from './product-thumbnail.service';
import {
  Controller,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { SharpPipe } from 'src/common/pipe/sharp.pipe';

@Controller('product-thumbnail')
export class ProductThumbnailController {
  constructor(
    private readonly productThumbnailService: ProductThumbnailService,
  ) {}

  @Post()
  @UseInterceptors(FileInterceptor('file'))
  async uploadProductThumbnailImage(
    @UploadedFile(SharpPipe) file: Express.Multer.File,
  ) {
    return await this.productThumbnailService.uploadProductThumbnailImage(file);
  }
}
