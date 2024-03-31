import { PickType } from '@nestjs/swagger';
import { User } from '../entities/user.entity';

export class GetProfileResponseDto extends PickType(User, [
  'id',
  'username',
  'role',
] as const) {}
