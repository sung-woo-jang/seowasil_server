import { OrderDetailsRepository } from './order-details.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { OrderDetailsService } from './order-details.service';

@Module({
  imports: [TypeOrmModule.forFeature([OrderDetailsRepository])],
  providers: [OrderDetailsService],
})
export class OrderDetailsModule {}
