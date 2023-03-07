import { DeliverAddress } from 'src/api/deliver-address/entities/deliver-address.entity';
import { PickType } from '@nestjs/swagger';

export class CreateDeliverAddressDto extends PickType(DeliverAddress, [
  'address1',
  'address2',
  'address3',
] as const) {
  user_id: number;
}
