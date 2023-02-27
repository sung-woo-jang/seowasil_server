import { DeliverAddress } from './entities/deliver-address.entity';
import { Repository } from 'typeorm';
export declare class DeliverAddressRepository extends Repository<DeliverAddress> {
    createAddress(address1: string, address2: string, address3: string): Promise<{
        address1: string;
        address2: string;
        address3: string;
    } & DeliverAddress>;
}
