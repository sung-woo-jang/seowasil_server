import { Entity, Column } from 'typeorm';
import { CommonEntity } from 'src/common/entities/common.entity';

@Entity()
export class DeliverAddress extends CommonEntity {
  @Column({ type: 'varchar', comment: '우편번호', nullable: false })
  address1: string;

  @Column({ type: 'varchar', comment: '주소', nullable: false })
  address2: string;

  @Column({ type: 'varchar', comment: '상세주소', nullable: false })
  address3: string;
}
