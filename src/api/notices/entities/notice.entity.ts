import { CommonEntity } from 'src/common/entities/common.entity';
import { Column, Entity } from 'typeorm';

@Entity()
export class Notice extends CommonEntity {
  @Column({ type: 'varchar', comment: '공지 제목', nullable: false })
  title: string;

  @Column({ type: 'varchar', comment: '공지 내용', nullable: false })
  description: string;
}
