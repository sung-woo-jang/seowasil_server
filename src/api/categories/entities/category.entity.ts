import { CommonEntity } from 'src/common/entities/common.entity';
import { Entity, Column } from 'typeorm';

@Entity()
export class Category extends CommonEntity {
  @Column({ type: 'varchar', comment: '카테고리명', nullable: false })
  name: string;

  @Column({
    type: 'varchar',
    comment: '학명(Thuja occidentalis)',
    nullable: false,
  })
  scientific: string;

  @Column({ type: 'varchar', comment: '과명(측백나무과)', nullable: false })
  department: string;
}
