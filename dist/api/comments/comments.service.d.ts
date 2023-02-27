import { CommentsRepository } from './comments.repository';
import { UpdateCommentDto } from './dto/update-comment.dto';
import { CreateCommentDto } from './dto/create-comment.dto';
import { Comment } from './entities/comment.entity';
export declare class CommentsService {
    private commentsRepository;
    constructor(commentsRepository: CommentsRepository);
    createComment(createCommentDto: CreateCommentDto): Promise<{
        comment: string;
    } & Comment>;
    getCommentList(): Promise<Comment[]>;
    getComment(id: number): Promise<Comment>;
    updateComment(updateCommentDto: UpdateCommentDto, id: number): Promise<import("typeorm").UpdateResult>;
    deleteComment(id: number): Promise<import("typeorm").UpdateResult>;
}
