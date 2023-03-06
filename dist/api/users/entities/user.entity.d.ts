import { Order } from './../../orders/entities/order.entity';
import { CommonEntity } from 'src/common/entities/common.entity';
import { DeliverAddress } from 'src/api/deliver-address/entities/deliver-address.entity';
import { Cart } from 'src/api/carts/entities/cart.entity';
export declare enum Role {
    ADMIN = "ADMIN",
    CUSTOMER = "CUSTOMER"
}
export declare class User extends CommonEntity {
    account: string;
    password: string;
    name: string;
    phoneNumber: string;
    email: string;
    role: Role;
    currentHashedRefreshToken?: string;
    address: DeliverAddress;
    orders: Order[];
    cart: Cart[];
}
