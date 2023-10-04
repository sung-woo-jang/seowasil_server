import { Module } from '@nestjs/common';
import { DeliverAddressService } from './deliver-address.service';
import { DeliverAddressController } from './deliver-address.controller';

import { DeliverAddressRepository } from './deliver-address.repository';
import { RepositoryModule } from 'src/database/repository/repository.module';

@Module({
  imports: [RepositoryModule.forCustomRepository([DeliverAddressRepository])],
  controllers: [DeliverAddressController],
  providers: [DeliverAddressService],
})
export class DeliverAddressModule {}
