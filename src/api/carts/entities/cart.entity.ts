import { User } from 'src/api/users/entities/user.entity';
import { Product } from 'src/api/products/entities/product.entity';
import { CommonEntity } from 'src/common/entities/common.entity';
import { Entity, Column, ManyToOne, JoinColumn } from 'typeorm';

@Entity()
export class Cart extends CommonEntity {
  @Column({ type: 'integer', comment: '주문 수량', nullable: false })
  amount: number;

  @ManyToOne(() => Product, (product: Product) => product.cart)
  @JoinColumn([
    {
      name: 'product_id',
      referencedColumnName: 'id',
    },
  ])
  product: Product;

  @ManyToOne(() => User, (user: User) => user.cart, {
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
}
