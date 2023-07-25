import { Module } from '@nestjs/common';
import { DeliverAddressService } from './deliver-address.service';
import { DeliverAddressController } from './deliver-address.controller';

import { TypeOrmModule } from '@nestjs/typeorm';
import { DeliverAddress } from './entities/deliver-address.entity';

@Module({
  imports: [TypeOrmModule.forFeature([DeliverAddress])],
  controllers: [DeliverAddressController],
  providers: [DeliverAddressService],
})
export class DeliverAddressModule {}
