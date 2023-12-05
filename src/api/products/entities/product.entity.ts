import { IsNumberString, IsOptional } from 'class-validator';
import { Column, Entity, ManyToOne, OneToMany } from 'typeorm';
import { ProductImage } from './product-image.entity';
import { ProductDetailImage } from './product-detail-image.entity';
import { Category } from '@app/categories/entities/category.entity';
import { Order } from '@app/orders/entities/order.entity';
import { Cart } from '@app/carts/entities/cart.entity';
import { CommonEntity } from '@common/entities/common.entity';

export enum Status {
  SALE = '판매중',
  PREPARING = '상품 준비중',
  SOLDOUT = '품절',
}

@Entity()
export class Product extends CommonEntity<Product> {
  @Column({ type: 'varchar', comment: '상품명', nullable: false })
  title: string;

  @Column({ type: 'varchar', comment: '상품 설명', nullable: false })
  description: string;

  @IsOptional()
  @IsNumberString()
  @Column({ type: 'integer', comment: '상품 가격', nullable: true })
  prevPrice: number;

  @IsNumberString()
  @Column({ type: 'integer', comment: '판매 가격', nullable: false })
  sellPrice: number;

  // @IsOptional()
  @IsNumberString()
  @Column({ type: 'integer', comment: '최소 주문 수량', nullable: true })
  minAmount: number;

  @Column({
    type: 'boolean',
    comment: '최고 인기상품',
    default: true,
  })
  isBest: boolean;

  @IsOptional()
  @Column({
    type: 'varchar',
    comment: '판매 상태',
    nullable: true,
    default: Status.SALE,
  })
  status: Status;

  @IsOptional()
  @Column({
    type: 'integer',
    comment: '상품 설명',
    nullable: true,
    default: 0,
  })
  viewCount: number;

  @OneToMany(
    () => ProductImage,
    (productImage: ProductImage) => productImage.product,
    { cascade: true },
  )
  productImageUrl: ProductImage[];

  @OneToMany(
    () => ProductDetailImage,
    (productDetailImageUrl: ProductDetailImage) =>
      productDetailImageUrl.product,
    { cascade: true },
  )
  productDetailImageUrl: ProductDetailImage[];

  @OneToMany(() => Cart, (cart: Cart) => cart.product, { cascade: true })
  carts: Cart[];

  @OneToMany(() => Order, (order: Order) => order.product, { cascade: true })
  orders: Order[];

  @ManyToOne(() => Category, (category: Category) => category.products, {
    onDelete: 'CASCADE',
    nullable: false,
  })
  category: Category;
}
