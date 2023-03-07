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

  async getDeliveryAddressesListByUserId(user_id: number) {
    const query = this.createQueryBuilder('deliver_address')
      .leftJoinAndSelect('deliver_address.user', 'user')
      .select([
        'deliver_address.id as id',
        'deliver_address.address1 as address1',
        'deliver_address.address2 as address2',
        'deliver_address.address3 as address3',
      ])
      .where('user.id = :user_id', { user_id });

    const result = await query.getRawMany();
    return result;
  }
}
