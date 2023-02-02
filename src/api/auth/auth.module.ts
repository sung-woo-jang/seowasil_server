import { LocalStrategy } from './strategies/auth.local.strategy';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UsersRepository } from '../users/users.repository';
import { PassportModule } from '@nestjs/passport';

@Module({
  imports: [TypeOrmModule.forFeature([UsersRepository]), PassportModule],
  providers: [AuthService, LocalStrategy],
})
export class AuthModule {}
