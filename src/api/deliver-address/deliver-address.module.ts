import { DeliverAddressRepository } from './deliver-address.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { DeliverAddressService } from './deliver-address.service';
import { DeliverAddressController } from './deliver-address.controller';

@Module({
  imports: [TypeOrmModule.forFeature([DeliverAddressRepository])],
  controllers: [DeliverAddressController],
  providers: [DeliverAddressService],
})
export class DeliverAddressModule {}
