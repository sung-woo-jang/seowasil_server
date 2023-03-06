import { Repository } from 'typeorm';
import { Product } from './entities/product.entity';
export declare class ProductsRepository extends Repository<Product> {
    getProductDetail(id: number): Promise<Product>;
    getProductList(): Promise<Product[]>;
}
