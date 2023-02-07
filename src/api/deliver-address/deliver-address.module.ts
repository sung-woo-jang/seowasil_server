import { DeliverAddressRepository } from './deliver-address.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';

@Module({
  imports: [TypeOrmModule.forFeature([DeliverAddressRepository])],
})
export class DeliverAddressModule {}
