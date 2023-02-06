import { Column, Entity, ManyToOne, JoinColumn } from 'typeorm';
import { CommonEntity } from 'src/common/entities/common.entity';
import { IsNumber } from 'class-validator';
import { Category } from 'src/api/categories/entities/category.entity';

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

  @IsNumber()
  @Column({ type: 'integer', comment: '상품 가격', nullable: true })
  prevPrice: number;

  @IsNumber()
  @Column({ type: 'integer', comment: '판매 가격', nullable: false })
  sellPrice: number;

  @IsNumber()
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

  @ManyToOne(() => Category, (category: Category) => category.product)
  @JoinColumn([
    // foreignkey 정보들
    {
      name: 'category_id' /* db에 저장되는 필드 이름 */,
      referencedColumnName: 'id' /* USER의 id */,
    },
  ])
  category: Category;
}
