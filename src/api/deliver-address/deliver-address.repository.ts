import { Repository } from 'typeorm';
import { DeliverAddress } from './entities/deliver-address.entity';
import { CustomRepository } from 'src/database/repository/repository.decorator';

@CustomRepository(DeliverAddress)
export class DeliverAddressRepository extends Repository<DeliverAddress> {}
