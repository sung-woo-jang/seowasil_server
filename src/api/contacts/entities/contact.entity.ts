import { Comment } from 'src/api/comments/entities/comment.entity';
import { CommonEntity } from 'src/common/entities/common.entity';
import { Entity, Column, OneToOne, JoinColumn } from 'typeorm';

@Entity()
export class Contact extends CommonEntity {
  @Column({ type: 'varchar', comment: '문의 제목', nullable: false })
  title: string;

  @Column({ type: 'varchar', comment: '문의 내용', nullable: false })
  description: string;

  @Column({ type: 'varchar', comment: '글쓴이', nullable: false })
  name: string;

  @Column({ type: 'varchar', comment: '문의글 비밀번호', nullable: false })
  password: string;

  @Column({
    type: 'varchar',
    comment: '문의 카테고리',
    nullable: false,
    default: '기타',
  })
  category: string;

  @OneToOne(() => Comment)
  @JoinColumn({ name: 'comment_id', referencedColumnName: 'id' })
  comment: Comment;
}
