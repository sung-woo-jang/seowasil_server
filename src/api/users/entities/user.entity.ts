import { CommonEntity } from 'src/common/entities/common.entity';
import { Exclude } from 'class-transformer';
import { IsBoolean, IsNotEmpty, IsString } from 'class-validator';
import { Column, Entity, Index } from 'typeorm';

export enum Role {
  ADMIN = 'ADMIN',
  CUSTOMER = 'CUSTOMER',
}

@Index(['account'], { unique: true })
@Entity()
export class User extends CommonEntity {
  @IsNotEmpty({ message: '아이디를 입력해주세요' })
  @Column({ type: 'varchar', comment: '계정', nullable: false })
  account: string;

  @Exclude()
  @Column({ type: 'varchar', comment: '비밀번호', nullable: false })
  password: string;

  @IsString()
  @IsNotEmpty({ message: '이름을 작성해주세요.' })
  @Column({ type: 'varchar', comment: '사용자 이름', nullable: false })
  username: string;

  @IsBoolean()
  @Column({ type: 'varchar', comment: '유저 권한', default: Role.CUSTOMER })
  role: Role;
}
