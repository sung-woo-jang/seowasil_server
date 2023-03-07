import { Public } from './../../common/decorators/skip-auth.decorator';
import { CreateDeliverAddressDto } from './dto/create-deliver-address.dto';
import { Body, Controller, Post } from '@nestjs/common';
import { DeliverAddressService } from './deliver-address.service';

@Public()
@Controller('deliver-address')
export class DeliverAddressController {
  constructor(private readonly deliverAddressService: DeliverAddressService) {}
  @Post()
  async createAddress(
    @Body() createDeliverAddressDto: CreateDeliverAddressDto,
  ) {
    return this.deliverAddressService.createAddress(createDeliverAddressDto);
  }
}
