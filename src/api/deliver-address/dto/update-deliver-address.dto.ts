import { PickType } from '@nestjs/swagger';
import { CreateDeliverAddressDto } from './create-deliver-address.dto';

export class UpdateDeliverAddressDto extends PickType(CreateDeliverAddressDto, [
  'user_id',
  'address1',
  'address2',
  'address3',
] as const) {}
