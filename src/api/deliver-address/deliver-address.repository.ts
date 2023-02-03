import { DeliverAddress } from './entities/deliver-address.entity';
import { EntityRepository, Repository } from 'typeorm';

@EntityRepository(DeliverAddress)
export class DeliverAddressRepository extends Repository<DeliverAddress> {}
