import { CommonEntity } from 'src/common/entities/common.entity';
import { Column, Entity } from 'typeorm';

@Entity()
export class DeliverAddress extends CommonEntity {
  @Column({ type: 'varchar', comment: '우편번호', nullable: false })
  address1: string;

  @Column({ type: 'varchar', comment: '주소', nullable: false })
  address2: string;

  @Column({ type: 'varchar', comment: '상세주소', nullable: false })
  address3: string;

  @Column({
    type: 'boolean',
    comment: '기본 배송 주소',
    nullable: false,
    default: true,
  })
  isDefault: boolean;
}
