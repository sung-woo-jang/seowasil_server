import { Transform } from 'class-transformer';
import { CommonEntity } from 'src/common/entities/common.entity';
import { Column, Entity } from 'typeorm';

@Entity()
export class Order extends CommonEntity {
  @Column({ type: 'varchar', comment: '주문자명', nullable: false })
  name: string;

  @Column({ type: 'varchar', comment: '주문자 전화번호', nullable: false })
  phoneNumber: string;

  @Column({ type: 'varchar', comment: '배송 요청사항', nullable: true })
  deliveryRequest: string;

  @Column({ type: 'varchar', comment: '우편번호', nullable: false })
  address1: string;

  @Column({ type: 'varchar', comment: '주소', nullable: false })
  address2: string;

  @Column({ type: 'varchar', comment: '상세주소', nullable: false })
  address3: string;

  @Transform(({ value }) => Number(value))
  @Column({ type: 'integer', comment: '주문 수량', nullable: false })
  amount: number;

  @Column({
    type: 'integer',
    comment: '주문 가격 (판매가격 * 주문 수량)',
    nullable: false,
  })
  price: number;
}
