import { Repository } from 'typeorm';
import { Comment } from './entities/comment.entity';
import { CustomRepository } from 'src/database/repository/repository.decorator';

@CustomRepository(Comment)
export class CommentsRepository extends Repository<Comment> {
  async findCommentById(id: number): Promise<Comment> {
    return await this.findOne({
      where: { id },
    });
  }

  async softDeleteComment(id: number) {
    return await this.createQueryBuilder('comment')
      .softDelete()
      .where('id =:id', { id })
      .execute();
  }
}
