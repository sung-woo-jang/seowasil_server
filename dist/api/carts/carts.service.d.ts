import { UsersRepository } from './../users/users.repository';
import { CartsRepository } from './carts.repository';
import { CreateCartDto } from './dto/create-cart.dto';
import { ProductsRepository } from '../products/products.repository';
export declare class CartsService {
    private cartsRepository;
    private productsRepository;
    private usersRepository;
    constructor(cartsRepository: CartsRepository, productsRepository: ProductsRepository, usersRepository: UsersRepository);
    createCart(createCartDto: CreateCartDto): Promise<import("./entities/cart.entity").Cart>;
    getCartDetail(id: number): Promise<import("./entities/cart.entity").Cart>;
    getCartList(): Promise<import("./entities/cart.entity").Cart[]>;
    updateCart(): Promise<import("./entities/cart.entity").Cart[]>;
    deleteCart(): Promise<import("./entities/cart.entity").Cart[]>;
}
