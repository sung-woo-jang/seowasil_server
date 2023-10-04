import { IntersectionType, PickType } from '@nestjs/swagger';
import { User } from '../entities/user.entity';
import { CreateDeliverAddressDto } from '@app/deliver-address/dto/create-deliver-address.dto';
// import { Transform } from 'class-transformer';
// import * as bcrypt from 'bcryptjs';

export class CreateUserDto extends PickType(User, [
  'account',
  'username',
  'password',
  'phoneNumber',
] as const) {}

export class CreateUserAndAddressDto extends IntersectionType(
  CreateUserDto,
  CreateDeliverAddressDto,
) {}
