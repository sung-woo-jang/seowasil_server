import { Repository } from 'typeorm';
import { Cart } from './entities/cart.entity';
import { CustomRepository } from 'src/database/repository/repository.decorator';

@CustomRepository(Cart)
export class CartsRepository extends Repository<Cart> {}
