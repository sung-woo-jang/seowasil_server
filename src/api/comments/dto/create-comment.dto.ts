import { IntersectionType, PickType } from '@nestjs/swagger';
import { Comment } from '../entities/comment.entity';
import { Transform } from 'class-transformer';

export class CommentDto extends PickType(Comment, [
  'name',
  'comment',
] as const) {}

export class ContactDto {
  @Transform(({ value }) => Number(value))
  contactId: number;
}

export class CreateCommentDto extends IntersectionType(
  CommentDto,
  ContactDto,
) {}
