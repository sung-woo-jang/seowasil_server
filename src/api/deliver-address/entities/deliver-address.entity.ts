import { Entity, Column, JoinColumn, ManyToOne } from 'typeorm';
import { CommonEntity } from 'src/common/entities/common.entity';
import { User } from 'src/api/users/entities/user.entity';

@Entity()
export class DeliverAddress extends CommonEntity {
  @Column({ type: 'varchar', comment: '우편번호', nullable: false })
  address1: string;

  @Column({ type: 'varchar', comment: '주소', nullable: false })
  address2: string;

  @Column({ type: 'varchar', comment: '상세주소', nullable: false })
  address3: string;

  @ManyToOne(() => User, (user: User) => user.address, {
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
