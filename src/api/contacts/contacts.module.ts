import { ContactsRepository } from './contacts.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { ContactsService } from './contacts.service';
import { ContactsController } from './contacts.controller';

@Module({
  imports: [TypeOrmModule.forFeature([ContactsRepository])],
  controllers: [ContactsController],
  providers: [ContactsService],
})
export class ContactsModule {}
