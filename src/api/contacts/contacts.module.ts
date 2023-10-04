import { Module } from '@nestjs/common';
import { ContactsService } from './contacts.service';
import { ContactsController } from './contacts.controller';

import { ContactsRepository } from './contacts.repository';
import { ContactCategoryRepository } from '@app/contact-category/contact-category.repository';
import { RepositoryModule } from 'src/database/repository/repository.module';

@Module({
  imports: [
    RepositoryModule.forCustomRepository([
      ContactsRepository,
      ContactCategoryRepository,
    ]),
  ],
  controllers: [ContactsController],
  providers: [ContactsService],
})
export class ContactsModule {}
