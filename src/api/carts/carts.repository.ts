import { Cart } from './entities/cart.entity';
import { EntityRepository, Repository } from 'typeorm';

@EntityRepository(Cart)
export class CartsRepository extends Repository<Cart> {}
