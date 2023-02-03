import { Controller } from '@nestjs/common';
import { DeliverAddressService } from './deliver-address.service';

@Controller('deliver-address')
export class DeliverAddressController {
  constructor(private readonly deliverAddressService: DeliverAddressService) {}
}
