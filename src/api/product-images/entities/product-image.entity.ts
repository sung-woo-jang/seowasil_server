import { Entity, Column, ManyToOne, JoinColumn } from 'typeorm';
import { CommonEntity } from 'src/common/entities/common.entity';
import { Product } from 'src/api/products/entities/product.entity';

@Entity()
export class ProductImage extends CommonEntity {
  @Column({
    type: 'simple-array',
    comment: '서버에 저장 될 파일명',
    nullable: false,
  })
  storedFileName: string[];

  @ManyToOne(() => Product, (product: Product) => product.productImageUrl, {
    onDelete: 'CASCADE',
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
