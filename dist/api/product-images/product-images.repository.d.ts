import { Repository } from 'typeorm';
import { ProductImage } from './entities/product-image.entity';
export declare class ProductImageRepository extends Repository<ProductImage> {
    registerImageUrl(imgurl: string[]): Promise<ProductImage>;
}
