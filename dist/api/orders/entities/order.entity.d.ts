import { Product } from 'src/api/products/entities/product.entity';
import { OrderDetail } from './../../order-details/entities/order-detail.entity';
import { CommonEntity } from 'src/common/entities/common.entity';
import { User } from 'src/api/users/entities/user.entity';
export declare class Order extends CommonEntity {
    address1: string;
    address2: string;
    address3: string;
    deliveryRequest: string;
    user: User;
    orderDetail: OrderDetail[];
    product: Product;
}
