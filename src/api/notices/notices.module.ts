import { NoticesRepository } from './notices.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { NoticesService } from './notices.service';
import { NoticesController } from './notices.controller';

@Module({
  imports: [TypeOrmModule.forFeature([NoticesRepository])],
  controllers: [NoticesController],
  providers: [NoticesService],
})
export class NoticesModule {}
