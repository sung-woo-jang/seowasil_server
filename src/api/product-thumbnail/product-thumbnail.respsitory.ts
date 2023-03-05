import { ProductThumbnail } from './entities/product-thumbnail.entity';
import { EntityRepository, Repository } from 'typeorm';

@EntityRepository(ProductThumbnail)
export class ProductThumbnailRepository extends Repository<ProductThumbnail> {
  async registerThumbnailImageUrl(imgurl: string) {
    const result = await this.create({
      storedFileName: imgurl,
    }).save();
    return result;
  }
}
