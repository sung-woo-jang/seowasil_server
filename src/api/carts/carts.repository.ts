import { Cart } from './entities/cart.entity';
import { EntityRepository, Repository } from 'typeorm';

@EntityRepository(Cart)
export class CartsRepository extends Repository<Cart> {
  async getCartDetail(id: number) {
    const result = await this.createQueryBuilder('cart')
      .leftJoinAndSelect('cart.product', 'product')
      // .leftJoinAndSelect('cart.user', 'user')
      .select([
        'cart.id',
        'cart.amount',
        'product.id',
        'product.title',
        'product.description',
        'product.sellPrice',
      ])
      .where('cart.id = :id', { id })
      .getOne();
    return result;
  }
}
