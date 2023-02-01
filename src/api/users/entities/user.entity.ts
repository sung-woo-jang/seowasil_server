import { Exclude } from 'class-transformer';
import {
  IsBoolean,
  IsEmail,
  IsNotEmpty,
  IsPhoneNumber,
  IsString,
} from 'class-validator';
import { Column, Entity, Index } from 'typeorm';
import { CommonEntity } from './../../../common/entities/common.entity';

export enum Role {
  ADMIN = 'ADMIN',
  CUSTOMER = 'CUSTOMER',
}

@Index(['account', 'email', 'phoneNumber'], { unique: true })
@Entity({ name: 'User' })
export class User extends CommonEntity {
  @IsNotEmpty({ message: '아이디를 입력해주세요' })
  @Column({ type: 'varchar', nullable: false })
  account: string;

  @Exclude()
  @Column({ type: 'varchar', nullable: false })
  password: string;

  @IsString()
  @IsNotEmpty({ message: '이름을 작성해주세요.' })
  @Column({ type: 'varchar', nullable: false })
  name: string;

  @IsPhoneNumber()
  @IsNotEmpty({ message: '전화번호를 입력해주세요' })
  @Column({ type: 'integer', nullable: false })
  phoneNumber: number;

  @IsEmail()
  @Column({ type: 'varchar', nullable: true })
  email: string;

  @IsBoolean()
  @Column({ type: 'varchar', default: 'CUSTOMER' })
  role: Role;
}
