import { EntityRepository, Repository } from 'typeorm';
import { ProductImage } from './entities/product-image.entity';

@EntityRepository(ProductImage)
export class ProductImageRepository extends Repository<ProductImage> {
  async registerImageUrl(imgurl: string[]) {
    const result = await this.create({
      storedFileName: imgurl,
    }).save();
    return result;
  }
}
