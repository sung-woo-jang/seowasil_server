import { IntersectionType, PickType } from '@nestjs/swagger';
import { User } from '../entities/user.entity';

export class CreateUserDto extends PickType(User, [
  'account',
  'username',
  'password',
  'phoneNumber',
] as const) {}
