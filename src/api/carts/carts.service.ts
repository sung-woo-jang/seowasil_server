import { UsersRepository } from './../users/users.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { BadRequestException, Injectable } from '@nestjs/common';
import { CartsRepository } from './carts.repository';
import { CreateCartDto } from './dto/create-cart.dto';
import { ProductsRepository } from '../products/products.repository';

@Injectable()
export class CartsService {
  constructor(
    @InjectRepository(CartsRepository) private cartsRepository: CartsRepository,
    @InjectRepository(ProductsRepository)
    private productsRepository: ProductsRepository,
    @InjectRepository(UsersRepository)
    private usersRepository: UsersRepository,
  ) {}

  async createCart(createCartDto: CreateCartDto) {
    const product = await this.productsRepository.findOne({
      id: createCartDto.product_id,
    });

    if (product.minAmount > createCartDto.amount)
      throw new BadRequestException('최소 주문 수량이 맞지 않습니다.');

    const user = await this.usersRepository.findOne({
      id: createCartDto.user_id,
    });

    const cart = await this.cartsRepository
      .create({
        ...createCartDto,
        product,
        user,
      })
      .save();

    return await this.cartsRepository.getCartDetail(cart.id);
  }

  async getCartDetail(id: number) {
    return await this.cartsRepository.getCartDetail(id);
  }

  async getCartByUser(userId: number) {
    return await this.cartsRepository.getCartByUser(userId);
  }

  async updateCart() {
    return await this.cartsRepository.find();
  }

  async deleteCart(id: number) {
    return await this.cartsRepository.delete(id);
  }
}
