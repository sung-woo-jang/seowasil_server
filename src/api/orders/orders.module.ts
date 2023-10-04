import { Module } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { OrdersController } from './orders.controller';

import { OrdersRepository } from './orders.repository';
import { RepositoryModule } from 'src/database/repository/repository.module';

@Module({
  imports: [RepositoryModule.forCustomRepository([OrdersRepository])],
  controllers: [OrdersController],
  providers: [OrdersService],
})
export class OrdersModule {}
