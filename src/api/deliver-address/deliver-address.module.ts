import { Module } from '@nestjs/common';
import { DeliverAddressService } from './deliver-address.service';
import { DeliverAddressController } from './deliver-address.controller';

@Module({
  controllers: [DeliverAddressController],
  providers: [DeliverAddressService]
})
export class DeliverAddressModule {}
