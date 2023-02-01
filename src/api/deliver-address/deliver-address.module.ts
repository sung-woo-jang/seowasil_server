import { DeliverAddress } from './entities/deliver-address.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { DeliverAddressService } from './deliver-address.service';
import { DeliverAddressController } from './deliver-address.controller';

@Module({
  imports: [TypeOrmModule.forFeature([DeliverAddress])],
  controllers: [DeliverAddressController],
  providers: [DeliverAddressService],
})
export class DeliverAddressModule {}
