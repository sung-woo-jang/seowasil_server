import { User } from 'src/api/users/entities/user.entity';
import { DeliverAddress } from './entities/deliver-address.entity';
import { EntityRepository, Repository } from 'typeorm';
import { CreateDeliverAddressDto } from './dto/create-deliver-address.dto';
import { UpdateDeliverAddressDto } from './dto/update-deliver-address.dto';

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

  // 사용자별 배송지 목록 가져오기
  async getDeliveryAddresses(user_id: number) {
    const query = this.createQueryBuilder('deliver_address')
      .leftJoinAndSelect('deliver_address.user', 'user')
      .select([
        'deliver_address.id as id',
        'deliver_address.address1 as address1',
        'deliver_address.address2 as address2',
        'deliver_address.address3 as address3',
        'deliver_address.is_default as is_default',
      ])
      .where('user.id = :user_id', { user_id });

    const result = await query.getRawMany();
    return result;
  }

  // 사용자별 기본 배송지 가져오기
  async getDefaultDeliveryAddresses(user_id: number) {
    const query = this.createQueryBuilder('deliver_address')
      .leftJoinAndSelect('deliver_address.user', 'user')
      .select([
        'deliver_address.id as id',
        'deliver_address.address1 as address1',
        'deliver_address.address2 as address2',
        'deliver_address.address3 as address3',
        'deliver_address.is_default as is_default',
      ])
      .where('user.id = :user_id', { user_id })
      .andWhere('deliver_address.is_default = :isDefault', { isDefault: true });

    const result = await query.getRawOne();
    return result;
  }

  async updateDefaultDeliverAddressByUserId(
    updateDeliverAddressDto: UpdateDeliverAddressDto,
  ) {
    const { user_id, address1, address2, address3 } = updateDeliverAddressDto;
    const query = this.createQueryBuilder('deliver_address').leftJoinAndSelect(
      'deliver_address.user',
      'user',
    );

    await query
      .update()
      .set({ address1, address2, address3 })
      .andWhere('user.id = :user_id', { user_id })
      .execute();

    return await query
      .select([
        'deliver_address.id as id',
        'deliver_address.address1 as address1',
        'deliver_address.address2 as address2',
        'deliver_address.address3 as address3',
        'user.id',
      ])
      .where('user.id = :user_id', { user_id })
      .getRawOne();
  }
}
