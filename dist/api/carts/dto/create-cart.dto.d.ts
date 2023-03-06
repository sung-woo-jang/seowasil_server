import { Cart } from '../entities/cart.entity';
declare const CreateCartDto_base: import("@nestjs/common").Type<Pick<Cart, "amount">>;
export declare class CreateCartDto extends CreateCartDto_base {
    user_id: number;
    product_id: number;
}
export {};
