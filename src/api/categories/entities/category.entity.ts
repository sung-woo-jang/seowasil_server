import { Product } from 'src/api/products/entities/product.entity';
import { CommonEntity } from 'src/common/entities/common.entity';
import { Entity, Column, Index, OneToMany } from 'typeorm';

@Index(['name'], { unique: true })
@Entity()
export class Category extends CommonEntity {
  @Column({ type: 'varchar', comment: '카테고리명', nullable: false })
  name: string;

  @Column({
    type: 'varchar',
    comment: '학명(Thuja occidentalis)',
    nullable: false,
  })
  scientific: string;

  @Column({ type: 'varchar', comment: '과명(측백나무과)', nullable: false })
  department: string;

  @OneToMany(() => Product, (product: Product) => product.category)
  product: Product[];
}
