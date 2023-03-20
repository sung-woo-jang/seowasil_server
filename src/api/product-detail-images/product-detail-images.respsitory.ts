import { ProductDetailImages } from './entities/product-thumbnail.entity';
import { EntityRepository, Repository } from 'typeorm';

@EntityRepository(ProductDetailImages)
export class ProductDetailImagesRepository extends Repository<ProductDetailImages> {
  async registerDetailImagesUrl(imgurl: string[]) {
    const result = await this.create({
      storedFileName: imgurl,
    }).save();
    return result;
  }
}
