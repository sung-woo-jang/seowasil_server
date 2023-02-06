import { DeliverAddressRepository } from './deliver-address.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { DeliverAddressService } from './deliver-address.service';

@Module({
  imports: [TypeOrmModule.forFeature([DeliverAddressRepository])],
  providers: [DeliverAddressService],
})
export class DeliverAddressModule {}
