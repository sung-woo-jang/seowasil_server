import { DeliverAddress } from './entities/deliver-address.entity';
import { EntityRepository, Repository } from 'typeorm';

@EntityRepository(DeliverAddress)
export class DeliverAddressRepository extends Repository<DeliverAddress> {
  async createAddress(address1: string, address2: string, address3: string) {
    const result = await this.save({ address1, address2, address3 });
    return result;
  }
}
