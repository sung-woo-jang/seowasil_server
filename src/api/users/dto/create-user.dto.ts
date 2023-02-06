import { IsString, IsNotEmpty } from 'class-validator';
import { PickType } from '@nestjs/swagger';
import { User } from '../entities/user.entity';

export class CreateUserDto extends PickType(User, [
  'account',
  'name',
  'phoneNumber',
  'email',
] as const) {
  @IsString()
  @IsNotEmpty({ message: '비밀번호를 작성해주세요.' })
  password: string;

  address1: string;
  address2: string;
  address3: string;
}
