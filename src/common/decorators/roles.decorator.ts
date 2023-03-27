import { Role } from './../../api/users/entities/user.entity';
import { SetMetadata } from '@nestjs/common';

export const Roles = (...role: Role[]) => SetMetadata('roles', role);
