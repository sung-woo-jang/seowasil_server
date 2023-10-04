import { Contact } from '@app/contacts/entities/contact.entity';
import { CommonEntity } from '@common/entities/common.entity';
import { Column, Entity, OneToOne } from 'typeorm';

// 문의사항 답글
@Entity()
export class Comment extends CommonEntity<Comment> {
  @Column({
    type: 'varchar',
    comment: '작성자',
    nullable: false,
    default: '서와실 농원',
  })
  name: string;

  @Column({ type: 'varchar', comment: '답글', nullable: false })
  comment: string;

  @OneToOne(() => Contact, (contact: Contact) => contact.comment, {
    nullable: false,
  })
  contact: Contact;
}
