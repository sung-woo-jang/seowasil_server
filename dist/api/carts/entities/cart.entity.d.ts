import { User } from 'src/api/users/entities/user.entity';
import { Product } from 'src/api/products/entities/product.entity';
import { CommonEntity } from 'src/common/entities/common.entity';
export declare class Cart extends CommonEntity {
    amount: number;
    product: Product;
    user: User;
}
