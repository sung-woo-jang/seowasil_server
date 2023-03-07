import { User } from 'src/api/users/entities/user.entity';
import { DeliverAddress } from './entities/deliver-address.entity';
import { EntityRepository, Repository } from 'typeorm';
import { CreateDeliverAddressDto } from './dto/create-deliver-address.dto';

@EntityRepository(DeliverAddress)
export class DeliverAddressRepository extends Repository<DeliverAddress> {
  async createAddress(
    createDeliverAddressDto: CreateDeliverAddressDto,
    user: User,
  ) {
    const result = await this.create({
      ...createDeliverAddressDto,
      user,
    }).save();
    return result;
  }
}
