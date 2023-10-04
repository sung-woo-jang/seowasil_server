import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateCommentDto } from './dto/create-comment.dto';
import { CommentsRepository } from './comments.repository';
import { DataSource } from 'typeorm';
import { ContactsRepository } from '@app/contacts/contacts.repository';

@Injectable()
export class CommentsService {
  constructor(
    private readonly dataSource: DataSource,
    private commentsRepository: CommentsRepository,
    private contactsRepository: ContactsRepository,
  ) {}
  async createComment(createCommentDto: CreateCommentDto) {
    const { contactId, ...commentDto } = createCommentDto;
    const comment = await this.dataSource.transaction(async (manager) => {
      const contact = await manager
        .withRepository(this.contactsRepository)
        .findOneContacts(contactId);

      if (contact === null || contact.comment)
        throw new HttpException('오류', HttpStatus.NOT_FOUND);

      return await manager
        .withRepository(this.commentsRepository)
        .save({ contact, ...commentDto });
    });
    return await this.commentsRepository.findCommentById(comment.id);
  }
  async softDeleteComment(id: number) {
    const result = await this.commentsRepository.softDeleteComment(id);

    if (result.affected === 0)
      throw new HttpException('삭제 실패', HttpStatus.BAD_REQUEST);
    return '삭제 완료';
  }
}
