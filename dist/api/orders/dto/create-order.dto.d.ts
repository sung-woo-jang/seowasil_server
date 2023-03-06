import { Order } from '../entities/order.entity';
declare const CreateOrderDto_base: import("@nestjs/common").Type<Pick<Order, "address1" | "address2" | "address3" | "deliveryRequest" | "amount" | "price">>;
export declare class CreateOrderDto extends CreateOrderDto_base {
}
export {};
