import { PickType } from '@nestjs/swagger';
import { CreateDeliverAddressDto } from './create-deliver-address.dto';

export class UpdateDeliverAddressDto extends PickType(CreateDeliverAddressDto, [
  'user_id',
] as const) {
  id: number;
}
