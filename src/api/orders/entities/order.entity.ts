import { Product } from '@app/products/entities/product.entity';
import { User } from '@app/users/entities/user.entity';
import { CommonEntity } from '@common/entities/common.entity';
import { Transform } from 'class-transformer';
import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';

@Entity()
export class Order extends CommonEntity<Order> {
  @Column({ type: 'varchar', comment: '주문자명', nullable: false })
  name: string;

  @Column({ type: 'varchar', comment: '주문자 전화번호', nullable: false })
  phoneNumber: string;

  @Column({ type: 'varchar', comment: '배송 요청사항', nullable: true })
  deliveryRequest: string;

  @Column({ type: 'varchar', comment: '우편번호', nullable: false })
  zoneCode: string;

  @Column({ type: 'varchar', comment: '주소', nullable: false })
  roadAddress: string;

  @Column({ type: 'varchar', comment: '상세주소', nullable: false })
  detailAddress: string;

  @Transform(({ value }) => Number(value))
  @Column({ type: 'integer', comment: '주문 수량', nullable: false })
  amount: number;

  @Column({
    type: 'integer',
    comment: '주문 가격 (판매가격 * 주문 수량)',
    nullable: false,
  })
  price: number;

  @ManyToOne(() => User, (user: User) => user.orders, {
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

  @ManyToOne(() => Product, (product: Product) => product.orders, {
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
