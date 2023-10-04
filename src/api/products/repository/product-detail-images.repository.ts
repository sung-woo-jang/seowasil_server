import { Repository } from 'typeorm';
import { ProductDetailImage } from '../entities/product-detail-image.entity';
import { CustomRepository } from 'src/database/repository/repository.decorator';

@CustomRepository(ProductDetailImage)
export class ProductDetailImagesRepository extends Repository<ProductDetailImage> {}
