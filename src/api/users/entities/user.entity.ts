import { IsBoolean, IsNotEmpty, IsString } from 'class-validator';
import { Column, Entity, Index, OneToMany } from 'typeorm';
import { Order } from '@app/orders/entities/order.entity';
import { CommonEntity } from '@common/entities/common.entity';
import { Cart } from '@app/carts/entities/cart.entity';
import { DeliverAddress } from '@app/deliver-address/entities/deliver-address.entity';

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

  @OneToMany(() => DeliverAddress, (address: DeliverAddress) => address.user, {
    nullable: false,
    cascade: true,
  }) // 단방향 연결, 양방향도 가능
  address: DeliverAddress[];

  @OneToMany(() => Order, (order: Order) => order.user, {
    cascade: true,
  })
  orders: Order[];

  @OneToMany(() => Cart, (cart: Cart) => cart, {
    cascade: true,
  })
  cart: Cart[];
}
