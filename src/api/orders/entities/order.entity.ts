import { Column, Entity } from 'typeorm';
import { CommonEntity } from 'src/common/entities/common.entity';

@Entity()
export class Order extends CommonEntity {
  @Column({ type: 'varchar', comment: '우편번호', nullable: false })
  address1: string;

  @Column({ type: 'varchar', comment: '주소', nullable: false })
  address2: string;

  @Column({ type: 'varchar', comment: '상세주소', nullable: false })
  address3: string;

  @Column({ type: 'varchar', comment: '배송 요청사항', nullable: true })
  deliveryRequest: string;
}
