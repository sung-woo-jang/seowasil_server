import { OrderDetailsRepository } from './order-details.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';

@Module({
  imports: [TypeOrmModule.forFeature([OrderDetailsRepository])],
})
export class OrderDetailsModule {}
