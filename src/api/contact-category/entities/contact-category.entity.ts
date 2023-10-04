import { Contact } from '@app/contacts/entities/contact.entity';
import { CommonEntity } from '@common/entities/common.entity';
import { Column, Entity, OneToMany } from 'typeorm';

@Entity()
export class ContactCategory extends CommonEntity<ContactCategory> {
  @Column({ type: 'varchar', comment: '카테고리명', nullable: false })
  title: string;

  @OneToMany(() => Contact, (contact: Contact) => contact.contactCategory, {
    cascade: true,
    nullable: true,
  })
  contact: Contact[];
}
