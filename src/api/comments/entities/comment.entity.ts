import { CommonEntity } from 'src/common/entities/common.entity';
import { Column, Entity } from 'typeorm';

@Entity()
export class Comment extends CommonEntity {
  @Column({
    type: 'varchar',
    comment: '작성지',
    nullable: false,
    default: '서와실 농원',
  })
  name: string;

  @Column({ type: 'varchar', comment: '답글', nullable: false })
  comment: string;
}
