import { Module } from '@nestjs/common';
import { NoticesService } from './notices.service';
import { NoticesController } from './notices.controller';

import { NoticesRepository } from './notices.repository';
import { RepositoryModule } from 'src/database/repository/repository.module';

@Module({
  imports: [RepositoryModule.forCustomRepository([NoticesRepository])],
  controllers: [NoticesController],
  providers: [NoticesService],
})
export class NoticesModule {}
