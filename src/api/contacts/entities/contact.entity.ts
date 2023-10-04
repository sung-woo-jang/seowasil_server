import { Comment } from '@app/comments/entities/comment.entity';
import { ContactCategory } from '@app/contact-category/entities/contact-category.entity';
import { CommonEntity } from '@common/entities/common.entity';
import { Column, Entity, JoinColumn, ManyToOne, OneToOne } from 'typeorm';

@Entity()
export class Contact extends CommonEntity<Contact> {
  @Column({ type: 'varchar', comment: '문의 제목', nullable: false })
  title: string;

  @Column({ type: 'varchar', comment: '문의 내용', nullable: false })
  description: string;

  @Column({ type: 'varchar', comment: '글쓴이', nullable: false })
  name: string;

  @Column({ type: 'varchar', comment: '문의글 비밀번호', nullable: false })
  password: string;

  @ManyToOne(
    () => ContactCategory,
    (contactCategory: ContactCategory) => contactCategory.contact,
    { nullable: false, onDelete: 'CASCADE' },
  )
  @JoinColumn({}) // 식별 관계에서는 @JoinColumn()를 자식 엔티티에 설정
  contactCategory: ContactCategory;

  @OneToOne(() => Comment, { cascade: true, nullable: true })
  @JoinColumn({
    name: 'comment_id' /* db에 저장되는 필드 이름 */,
    referencedColumnName: 'id' /* USER의 id */,
  }) // 식별 관계에서는 @JoinColumn()를 부모 엔티티에 설정
  comment: Comment;
}
