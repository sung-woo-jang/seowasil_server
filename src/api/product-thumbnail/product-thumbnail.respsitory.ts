import { ProductThumbnail } from './entities/product-thumbnail.entity';
import { EntityRepository, Repository } from 'typeorm';

@EntityRepository(ProductThumbnail)
export class ProductThumbnailRepository extends Repository<ProductThumbnail> {}
