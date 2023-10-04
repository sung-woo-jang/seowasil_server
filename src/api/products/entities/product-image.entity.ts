import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { Product } from './product.entity';
import { CommonEntity } from '@common/entities/common.entity';

@Entity()
export class ProductImage extends CommonEntity<ProductImage> {
  @Column({
    type: 'varchar',
    comment: '서버에 저장 될 파일명',
    nullable: false,
  })
  storedFileName: string;

  @ManyToOne(() => Product, (product: Product) => product.productImageUrl, {
    nullable: false,
  })
  @JoinColumn({
    name: 'product_id' /* db에 저장되는 필드 이름 */,
    referencedColumnName: 'id' /* USER의 id */,
  })
  product: Product;
}
