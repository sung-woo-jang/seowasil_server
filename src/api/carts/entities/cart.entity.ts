import { CommonEntity } from 'src/common/entities/common.entity';
import { Entity, Column } from 'typeorm';

@Entity()
export class Cart extends CommonEntity {
  @Column({ type: 'integer', comment: '주문 수량', nullable: false })
  amount: number;
}
