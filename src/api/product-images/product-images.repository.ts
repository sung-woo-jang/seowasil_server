import { EntityRepository, Repository } from 'typeorm';
import { ProductImage } from './entities/product-image.entity';

@EntityRepository(ProductImage)
export class ProductImageRepository extends Repository<ProductImage> {
  async findByIdAndUpdateImg(fileName: string[]) {
    const result = [];
    fileName.forEach(async (el) => {
      result.push(
        await this.save({
          storedFileName: el,
        }),
      );
    });

    return result;
  }
}
