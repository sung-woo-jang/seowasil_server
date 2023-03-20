import { CommonEntity } from 'src/common/entities/common.entity';
import { Column, Entity } from 'typeorm';

@Entity()
export class ProductDetailImages extends CommonEntity {
  @Column({
    type: 'varchar',
    comment: '서버에 저장 될 상품설명 이미지 파일명',
    nullable: false,
  })
  storedFileName: string[];
}
