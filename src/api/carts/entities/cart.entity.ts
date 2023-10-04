import { Product } from '@app/products/entities/product.entity';
import { User } from '@app/users/entities/user.entity';
import { CommonEntity } from '@common/entities/common.entity';
import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';

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
export class Cart extends CommonEntity<Cart> {
  @Column({ type: 'integer', comment: '주문 수량', nullable: false })
  amount: number;

  @Column({ type: 'enum', enum: PaymentStatus, default: PaymentStatus.WAITING })
  paymentStatus: PaymentStatus;

  @ManyToOne(() => User, (user: User) => user.cart, {
    nullable: false,
    onDelete: 'CASCADE', // 사용자가 삭제되면 주문내역도 삭제된다.
  })
  @JoinColumn([
    // foreignkey 정보들
    {
      name: 'user_id' /* db에 저장되는 필드 이름 */,
      referencedColumnName: 'id' /* USER의 id */,
    },
  ])
  user: User;

  @ManyToOne(() => Product, (product: Product) => product.carts, {
    nullable: false,
    onDelete: 'CASCADE', // 사용자가 삭제되면 주문내역도 삭제된다.
  })
  @JoinColumn([
    // foreignkey 정보들
    {
      name: 'product_id' /* db에 저장되는 필드 이름 */,
      referencedColumnName: 'id' /* USER의 id */,
    },
  ])
  product: Product;
}
