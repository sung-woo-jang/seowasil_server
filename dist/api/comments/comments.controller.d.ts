import { CommentsService } from './comments.service';
import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';
export declare class CommentsController {
    private readonly commentsService;
    constructor(commentsService: CommentsService);
    createComment(createCommentDto: CreateCommentDto): Promise<{
        comment: string;
    } & import("./entities/comment.entity").Comment>;
    getCommentList(): Promise<import("./entities/comment.entity").Comment[]>;
    getComment(id: number): Promise<import("./entities/comment.entity").Comment>;
    updateComment(updateCommentDto: UpdateCommentDto, id: number): Promise<import("typeorm").UpdateResult>;
    deleteComment(id: number): Promise<import("typeorm").DeleteResult>;
}
