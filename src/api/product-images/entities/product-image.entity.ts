import { CommonEntity } from 'src/common/entities/common.entity';
import { Column, Entity } from 'typeorm';

@Entity()
export class ProductImage extends CommonEntity {
  @Column({
    type: 'simple-array',
    comment: '서버에 저장 될 파일명',
    nullable: false,
  })
  storedFileName: string[];
}
