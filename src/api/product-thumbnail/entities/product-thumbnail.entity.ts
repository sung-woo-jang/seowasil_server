import { CommonEntity } from 'src/common/entities/common.entity';
import { Column, Entity } from 'typeorm';

@Entity({ name: 'ProductThumbnail' })
export class ProductThumbnail extends CommonEntity {
  @Column({
    type: 'varchar',
    comment: '서버에 저장 될 파일명',
    nullable: false,
  })
  storedFileName: string;
}
