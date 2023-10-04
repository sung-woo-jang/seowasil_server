import { Module } from '@nestjs/common';
import { CommentsService } from './comments.service';
import { CommentsController } from './comments.controller';
import { CommentsRepository } from './comments.repository';
import { RepositoryModule } from 'src/database/repository/repository.module';
import { ContactsRepository } from '@app/contacts/contacts.repository';

@Module({
  imports: [
    RepositoryModule.forCustomRepository([
      CommentsRepository,
      ContactsRepository,
    ]),
  ],
  controllers: [CommentsController],
  providers: [CommentsService],
})
export class CommentsModule {}
