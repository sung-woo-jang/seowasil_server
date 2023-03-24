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

  @IsString()
  @IsNotEmpty({ message: '비밀번호를 작성해주세요.' })
  address1: string;

  @IsString()
  @IsNotEmpty({ message: '비밀번호를 작성해주세요.' })
  address2: string;

  @IsString()
  @IsNotEmpty({ message: '비밀번호를 작성해주세요.' })
  address3: string;
}
