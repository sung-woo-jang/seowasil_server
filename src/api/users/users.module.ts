import { DeliverAddressRepository } from './../deliver-address/deliver-address.repository';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { AuthService } from './../auth/auth.service';
import { UsersRepository } from './users.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';

@Module({
  imports: [
    TypeOrmModule.forFeature([UsersRepository, DeliverAddressRepository]),
    JwtModule.registerAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => {
        return {
          secret: configService.get<string>('JWT_SECRET_KEY'),
          signOptions: {
            expiresIn: configService.get<string>('JWT_EXPIRESIN'),
          },
        };
      },
    }),
  ],
  controllers: [UsersController],
  providers: [UsersService, AuthService],
})
export class UsersModule {}
