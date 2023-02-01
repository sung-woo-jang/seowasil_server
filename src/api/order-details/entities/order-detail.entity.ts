import { CommonEntity } from 'src/common/entities/common.entity';
import { Entity, Column } from 'typeorm';

@Entity()
export class OrderDetail extends CommonEntity {
  @Column({ type: 'integer', comment: '주문수량', nullable: false })
  amount: number;

  @Column({
    type: 'integer',
    comment: '결제 금액(주문수량 * 제품가격)',
    nullable: false,
  })
  price: number;
}
