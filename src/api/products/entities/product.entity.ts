import { IsNumberString } from 'class-validator';
import { CommonEntity } from 'src/common/entities/common.entity';
import { Column, Entity } from 'typeorm';

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
}
