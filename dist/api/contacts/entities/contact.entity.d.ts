import { Comment } from 'src/api/comments/entities/comment.entity';
import { CommonEntity } from 'src/common/entities/common.entity';
export declare class Contact extends CommonEntity {
    title: string;
    description: string;
    name: string;
    password: string;
    category: string;
    comment: Comment;
}
