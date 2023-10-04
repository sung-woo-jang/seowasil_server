import { PartialType } from '@nestjs/swagger';
import { CreateDeliverAddressDto } from './create-deliver-address.dto';

export class UpdateDeliverAddressDto extends PartialType(
  CreateDeliverAddressDto,
) {}
