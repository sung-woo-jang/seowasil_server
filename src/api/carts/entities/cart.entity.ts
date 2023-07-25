import { CommonEntity } from 'src/common/entities/common.entity';
import { Column, Entity } from 'typeorm';

export enum PaymentStatus {
  // 대기중
  WAITING = 'WAITING',
  // 완료
  COMPLETED = 'COMPLETED',
  // 취소
  CANCELED = 'CANCELED',
  // 실패
  FAILED = 'FAILED',
}

@Entity()
export class Cart extends CommonEntity {
  @Column({ type: 'integer', comment: '주문 수량', nullable: false })
  amount: number;

  @Column({ type: 'enum', enum: PaymentStatus, default: PaymentStatus.WAITING })
  paymentStatus: PaymentStatus;
}
