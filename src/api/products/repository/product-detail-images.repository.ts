import { Repository } from 'typeorm';
import { ProductDetailImage } from '../entities/product-detail-image.entity';
import { CustomRepository } from 'src/database/repository/repository.decorator';
import { Product } from '../entities/product.entity';

@CustomRepository(ProductDetailImage)
export class ProductDetailImagesRepository extends Repository<ProductDetailImage> {
  async createProductDetailImage(
    detailImages: Express.Multer.File[],
    product: Product,
  ) {
    Promise.all(
      detailImages.map(
        async ({ filename }) =>
          await this.save({ storedFileName: filename, product }),
      ),
    );
  }
}
