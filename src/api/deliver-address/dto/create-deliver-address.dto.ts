import { PickType } from '@nestjs/swagger';
import { DeliverAddress } from '../entities/deliver-address.entity';

export class CreateDeliverAddressDto extends PickType(DeliverAddress, [
  'postalCode',
  'address1',
  'address2',
] as const) {}
