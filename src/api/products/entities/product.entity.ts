import { Column, Entity } from 'typeorm';
import { CommonEntity } from 'src/common/entities/common.entity';

export enum Status {
  SALE = '판매중',
  PREPARING = '상품 준비중',
  SOLDOUT = '품절',
}

@Entity({ name: 'Product' })
export class Product extends CommonEntity {
  @Column({ type: 'varchar', comment: '상품명', nullable: false })
  title: string;

  @Column({ type: 'varchar', comment: '상품 설명', nullable: false })
  description: string;

  @Column({ type: 'integer', comment: '상품 가격', nullable: true })
  prevPrice: number;

  @Column({ type: 'integer', comment: '판매 가격', nullable: false })
  sellPrice: number;

  @Column({ type: 'integer', comment: '최소 주문 수량', nullable: false })
  minAmount: number;

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
}
