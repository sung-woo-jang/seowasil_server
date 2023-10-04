import { Repository } from 'typeorm';
import { ProductImage } from '../entities/product-image.entity';
import { CustomRepository } from 'src/database/repository/repository.decorator';

@CustomRepository(ProductImage)
export class ProductImagesRepository extends Repository<ProductImage> {}
