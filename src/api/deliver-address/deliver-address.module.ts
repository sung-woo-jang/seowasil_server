import { UsersRepository } from './../users/users.repository';
import { DeliverAddressRepository } from './deliver-address.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { DeliverAddressService } from './deliver-address.service';
import { DeliverAddressController } from './deliver-address.controller';

@Module({
  imports: [
    TypeOrmModule.forFeature([DeliverAddressRepository, UsersRepository]),
  ],
  providers: [DeliverAddressService],
  controllers: [DeliverAddressController],
})
export class DeliverAddressModule {}
