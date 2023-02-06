import { Product } from 'src/api/products/entities/product.entity';
import { OrderDetail } from './../../order-details/entities/order-detail.entity';
import { Column, Entity, ManyToOne, JoinColumn, OneToMany } from 'typeorm';
import { CommonEntity } from 'src/common/entities/common.entity';
import { User } from 'src/api/users/entities/user.entity';

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

  @ManyToOne(() => User, (user: User) => user.orders, {
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

  @OneToMany(
    () => OrderDetail,
    (orderDetail: OrderDetail) => orderDetail.orders,
    {
      cascade: true,
    },
  )
  orderDetail: OrderDetail[];

  @ManyToOne(() => Product, (product: Product) => product.orderDetail)
  @JoinColumn([
    {
      name: 'product_id',
      referencedColumnName: 'id',
    },
  ])
  product: Product;
}
