import {
  Column,
  Entity,
  ManyToOne,
  JoinColumn,
  OneToMany,
  OneToOne,
} from 'typeorm';
import { CommonEntity } from 'src/common/entities/common.entity';
import { IsNumberString } from 'class-validator';
import { Category } from 'src/api/categories/entities/category.entity';
import { ProductImage } from 'src/api/product-images/entities/product-image.entity';
import { Order } from './../../orders/entities/order.entity';
import { ProductDetailImages } from 'src/api/product-detail-images/entities/product-thumbnail.entity';
import { Cart } from 'src/api/carts/entities/cart.entity';

export enum Status {
  SALE = '판매중',
  PREPARING = '상품 준비중',
  SOLDOUT = '품절',
}

@Entity()
export class Product extends CommonEntity {
  @Column({ type: 'varchar', comment: '상품명', nullable: false })
  title: string;

  @Column({ type: 'varchar', comment: '상품 설명', nullable: false })
  description: string;

  @IsNumberString()
  @Column({ type: 'integer', comment: '상품 가격', nullable: true })
  prevPrice: number;

  @IsNumberString()
  @Column({ type: 'integer', comment: '판매 가격', nullable: false })
  sellPrice: number;

  @IsNumberString()
  @Column({ type: 'integer', comment: '최소 주문 수량', nullable: false })
  minAmount: number;

  @Column({
    type: 'boolean',
    comment: '최고 인기상품',
    default: false,
  })
  isBest: boolean;

  @Column({
    type: 'varchar',
    comment: '판매 상태',
    nullable: false,
    default: Status.SALE,
  })
  status: Status;

  @Column({
    type: 'integer',
    comment: '상품 설명',
    nullable: false,
    default: 0,
  })
  viewCount: number;

  @ManyToOne(() => Category, (category: Category) => category.product, {
    onDelete: 'CASCADE',
  })
  @JoinColumn([
    // foreignkey 정보들
    {
      name: 'category_id' /* db에 저장되는 필드 이름 */,
      referencedColumnName: 'id' /* USER의 id */,
    },
  ])
  category: Category;

  @OneToMany(() => Order, (order: Order) => order)
  order: Order[];

  @OneToMany(() => Cart, (cart: Cart) => cart)
  cart: Cart[];

  @OneToOne(() => ProductImage) // 단방향 연결, 양방향도 가능
  @JoinColumn({ name: 'productImage_id', referencedColumnName: 'id' })
  productImageUrl: ProductImage;

  @OneToOne(() => ProductDetailImages) // 단방향 연결, 양방향도 가능
  @JoinColumn({
    name: 'productDetailImagesUrl_id',
    referencedColumnName: 'id',
  })
  productDetailImagesUrl: ProductDetailImages;
}
