import { CreateCartDto } from './dto/create-cart.dto';
import { CartsService } from './carts.service';
export declare class CartsController {
    private readonly cartsService;
    constructor(cartsService: CartsService);
    createCart(createCartDto: CreateCartDto): Promise<import("./entities/cart.entity").Cart>;
    getCartDetail(id: number): Promise<import("./entities/cart.entity").Cart>;
    getCartList(): Promise<import("./entities/cart.entity").Cart[]>;
    updateCart(): Promise<import("./entities/cart.entity").Cart[]>;
    deleteCart(): Promise<import("./entities/cart.entity").Cart[]>;
}
