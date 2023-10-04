import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { LocalStrategy } from './strategies/local.strategy';
import { JwtStrategy } from './strategies/jwt.strategy';
import { AuthController } from './auth.controller';
import { jwtModuleOptionsFactory } from 'src/config/jwtModuleOptionsFactory.config';
import { UsersService } from '@app/users/users.service';
import { RepositoryModule } from 'src/database/repository/repository.module';
import { UsersRepository } from '@app/users/users.repository';
import { DeliverAddressRepository } from '@app/deliver-address/deliver-address.repository';

@Module({
  imports: [
    RepositoryModule.forCustomRepository([
      UsersRepository,
      DeliverAddressRepository,
    ]),
    PassportModule,
    JwtModule.registerAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: jwtModuleOptionsFactory,
    }),
  ],
  controllers: [AuthController],
  providers: [UsersService, AuthService, LocalStrategy, JwtStrategy],
  exports: [AuthService, JwtModule],
})
export class AuthModule {}
