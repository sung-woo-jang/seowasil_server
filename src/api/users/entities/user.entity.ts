import { Order } from './../../orders/entities/order.entity';
import { CommonEntity } from 'src/common/entities/common.entity';
import { Exclude } from 'class-transformer';
import { IsBoolean, IsEmail, IsNotEmpty, IsString } from 'class-validator';
import {
  Column,
  Entity,
  Index,
  JoinColumn,
  OneToOne,
  OneToMany,
} from 'typeorm';
import { DeliverAddress } from 'src/api/deliver-address/entities/deliver-address.entity';

export enum Role {
  ADMIN = 'ADMIN',
  CUSTOMER = 'CUSTOMER',
}

@Index(['account', 'email', 'phoneNumber'], { unique: true })
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
  name: string;

  @IsNotEmpty({ message: '전화번호를 입력해주세요' })
  @Column({ type: 'varchar', comment: '전화번호', nullable: false })
  phoneNumber: string;

  @IsEmail()
  @Column({ type: 'varchar', comment: '이메일', nullable: true })
  email: string;

  @IsBoolean()
  @Column({ type: 'varchar', comment: '유저 권한', default: 'CUSTOMER' })
  role: Role;

  @Column({ nullable: true })
  @Exclude()
  currentHashedRefreshToken?: string;

  @OneToOne(() => DeliverAddress) // 단방향 연결, 양방향도 가능
  @JoinColumn({ name: 'address_id', referencedColumnName: 'id' })
  address: DeliverAddress;

  @OneToMany(() => Order, (order: Order) => order.user, {
    cascade: true, // 사용자를 통해 주문정보가 추가, 수정, 삭제되고 사용자가 저장되면 추가된 주문내역도 저장된다
  })
  orders: Order[];
}
