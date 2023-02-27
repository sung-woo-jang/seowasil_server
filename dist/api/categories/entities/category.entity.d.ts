import { Product } from 'src/api/products/entities/product.entity';
import { CommonEntity } from 'src/common/entities/common.entity';
export declare class Category extends CommonEntity {
    name: string;
    scientific: string;
    department: string;
    product: Product[];
}
