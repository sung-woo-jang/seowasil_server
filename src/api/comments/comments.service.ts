import { CommentsRepository } from './comments.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';
import { UpdateCommentDto } from './dto/update-comment.dto';
import { CreateCommentDto } from './dto/create-comment.dto';
import { Comment } from './entities/comment.entity';

@Injectable()
export class CommentsService {
  constructor(
    @InjectRepository(CommentsRepository)
    private commentsRepository: CommentsRepository,
  ) {}

  async createComment(createCommentDto: CreateCommentDto) {
    const result = await this.commentsRepository.save({
      ...createCommentDto,
    });
    return result;
  }

  async getCommentList() {
    const result = await this.commentsRepository.find();
    return result;
  }

  async getComment(id: number) {
    const result = await this.commentsRepository.findOne({ id });

    return result;
  }

  async updateComment(updateCommentDto: UpdateCommentDto, id: number) {
    const result = await this.commentsRepository
      .createQueryBuilder('comment')
      .update(Comment)
      .set({ ...updateCommentDto })
      .where('id = :id', { id })
      .execute();
    return result;
    // return updateCommentDto;
  }

  async deleteComment(id: number) {
    return await this.commentsRepository.softDelete(id);
  }
}
