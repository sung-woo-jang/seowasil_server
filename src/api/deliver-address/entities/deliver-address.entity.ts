import { User } from '@app/users/entities/user.entity';
import { CommonEntity } from '@common/entities/common.entity';
import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';

@Entity()
export class DeliverAddress extends CommonEntity<DeliverAddress> {
  @Column({ type: 'varchar', comment: '우편번호', nullable: false })
  zoneCode: string;

  @Column({ type: 'varchar', comment: '주소', nullable: false })
  roadAddress: string;

  @Column({ type: 'varchar', comment: '상세주소', nullable: false })
  detailAddress: string;

  @Column({
    type: 'boolean',
    comment: '기본 배송 주소',
    nullable: false,
    default: true,
  })
  isDefault: boolean;

  @ManyToOne(() => User, (user: User) => user.address, {
    nullable: false,
    onDelete: 'CASCADE', // 사용자가 삭제되면 연결된 것도 삭제된다.
  })
  @JoinColumn([
    // foreignkey 정보들
    {
      name: 'user_id' /* db에 저장되는 필드 이름 */,
      referencedColumnName: 'id' /* USER의 id */,
    },
  ])
  user: User;
}
