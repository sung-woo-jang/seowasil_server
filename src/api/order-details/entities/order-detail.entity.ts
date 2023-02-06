import { Order } from './../../orders/entities/order.entity';
import { CommonEntity } from 'src/common/entities/common.entity';
import { Entity, Column, ManyToOne, JoinColumn } from 'typeorm';

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

  @ManyToOne(() => Order, (orders: Order) => orders.orderDetail, {
    onDelete: 'SET NULL',
  })
  @JoinColumn([
    // foreignkey 정보들
    {
      name: 'order_id' /* db에 저장되는 필드 이름 */,
      referencedColumnName: 'id',
    },
  ])
  orders: Order;
}
