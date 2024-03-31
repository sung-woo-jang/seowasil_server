import { IsBoolean, IsNotEmpty, IsString } from 'class-validator';
import { Column, Entity, Index, OneToMany } from 'typeorm';
import { CommonEntity } from '@common/entities/common.entity';

export enum Role {
  ADMIN = 'ADMIN',
  CUSTOMER = 'CUSTOMER',
}

@Index(['account', 'phoneNumber'], { unique: true })
@Entity()
export class User extends CommonEntity<User> {
  @IsNotEmpty({ message: '아이디를 입력해주세요' })
  @Column({ type: 'varchar', comment: '계정', nullable: false })
  account: string;

  @IsString()
  @IsNotEmpty({ message: '비밀번호를 작성해주세요.' })
  @Column({ type: 'varchar', comment: '비밀번호', nullable: false })
  password: string;

  @IsString()
  @IsNotEmpty({ message: '이름을 작성해주세요.' })
  @Column({ type: 'varchar', comment: '사용자 이름', nullable: false })
  username: string;

  @IsNotEmpty({ message: '전화번호를 입력해주세요' })
  @Column({ type: 'varchar', comment: '전화번호', nullable: false })
  phoneNumber: string;

  @IsBoolean()
  @Column({ type: 'varchar', comment: '유저 권한', default: Role.CUSTOMER })
  role: Role;
}
