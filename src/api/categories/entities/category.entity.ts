import { Product } from '@app/products/entities/product.entity';
import { CommonEntity } from '@common/entities/common.entity';
import { Column, Entity, Index, OneToMany } from 'typeorm';

@Index(['name'], { unique: true })
@Entity()
export class Category extends CommonEntity<Category> {
  @Column({ type: 'varchar', comment: '카테고리명', nullable: false })
  name: string;

  @Column({
    type: 'varchar',
    comment: '학명(Thuja occidentalis)',
    nullable: true,
  })
  scientific: string;

  @Column({ type: 'varchar', comment: '과명(측백나무과)', nullable: true })
  department: string;

  @OneToMany(() => Product, (products: Product) => products.category, {
    cascade: true,
  })
  products: Product[];
}
