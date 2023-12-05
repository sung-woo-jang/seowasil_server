import { PickType } from '@nestjs/swagger';
import { DeliverAddress } from '../entities/deliver-address.entity';

export class CreateDeliverAddressDto extends PickType(DeliverAddress, [
  'zoneCode',
  'roadAddress',
  'detailAddress',
] as const) {}
