import { Cart, PaymentStatus } from './entities/cart.entity';
import { EntityRepository, Repository } from 'typeorm';

@EntityRepository(Cart)
export class CartsRepository extends Repository<Cart> {
  async getCartDetail(id: number) {
    const result = await this.createQueryBuilder('cart')
      .leftJoinAndSelect('cart.product', 'product')
      .leftJoinAndSelect('product.productImageUrl', 'productImageUrl')
      // .leftJoinAndSelect('cart.user', 'user')
      .select([
        'cart.id',
        'cart.amount',
        'product.id',
        'product.title',
        'product.prevPrice',
        'product.sellPrice',
        'product.productImageUrl',
        'productImageUrl.storedFileName',
      ])
      .where('cart.paymentStatus = :status', {
        status: PaymentStatus.WAITING,
      })
      .andWhere('cart.id = :id', { id })
      .getOne();
    return result;
  }
  async getCartByUser(user_id: number) {
    const result = await this.createQueryBuilder('cart')
      .leftJoinAndSelect('cart.product', 'product')
      .leftJoinAndSelect('product.productImageUrl', 'productImageUrl')
      .leftJoinAndSelect('product.category', 'category')
      .leftJoinAndSelect('cart.user', 'user')
      .addSelect('true', 'is_selected') // 기본값을 true로 설정한 가상 컬럼 추가
      .select([
        'cart.id as id',
        'cart.amount as amount',
        'product.id',
        'product.title as title',
        'product.prevPrice as prev_Price',
        'product.sellPrice as sell_Price',
        'category.name as category',
        'productImageUrl.storedFileName as stored_File_Name',
        'true as is_selected', // 추가한 가상 컬럼 선택
      ])
      .where('cart.paymentStatus = :status', {
        status: PaymentStatus.WAITING,
      })
      .andWhere('user.id = :user_id', { user_id })
      .getRawMany();

    result.forEach((cart) => {
      cart.stored_file_name = cart.stored_file_name.split(',');
    });

    return result;
  }
}
