import { Order } from './../../orders/entities/order.entity';
import { CommonEntity } from 'src/common/entities/common.entity';
export declare class OrderDetail extends CommonEntity {
    amount: number;
    price: number;
    orders: Order;
}
