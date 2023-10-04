import { Module } from '@nestjs/common';
import { CartsService } from './carts.service';
import { CartsController } from './carts.controller';
import { CartsRepository } from './carts.repository';
import { RepositoryModule } from 'src/database/repository/repository.module';

@Module({
  imports: [RepositoryModule.forCustomRepository([CartsRepository])],
  controllers: [CartsController],
  providers: [CartsService],
})
export class CartsModule {}
