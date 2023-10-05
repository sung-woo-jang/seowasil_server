import { Repository } from 'typeorm';
import { ProductImage } from '../entities/product-image.entity';
import { CustomRepository } from 'src/database/repository/repository.decorator';
import { Product } from '../entities/product.entity';

@CustomRepository(ProductImage)
export class ProductImagesRepository extends Repository<ProductImage> {
  async createProductImage(
    productImages: Express.Multer.File[],
    product: Product,
  ) {
    Promise.all(
      productImages.map(
        async ({ filename }) =>
          await this.save({ storedFileName: filename, product }),
      ),
    );
  }
}
