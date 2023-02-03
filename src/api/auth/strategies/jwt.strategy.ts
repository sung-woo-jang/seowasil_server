import { UsersRepository } from './../../users/users.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy, 'jwt') {
  constructor(
    private configService: ConfigService,
    @InjectRepository(UsersRepository) private usersRepository: UsersRepository,
  ) {
    super({
      //Request에서 JWT 토큰을 추출하는 방법을 설정 -> Authorization에서 Bearer Token에 JWT 토큰을 담아 전송해야한다.
      jwtFromRequest: ExtractJwt.fromExtractors([
        (request) => {
          return request?.cookies?.Authentication;
        },
      ]),
      //true로 설정하면 Passport에 토큰 검증을 위임하지 않고 직접 검증, false는 Passport에 검증 위임 (ex: JWT토큰 만료 확인)
      ignoreExpiration: false,
      secretOrKey: configService.get<string>('JWT_SECRET_KEY'),
    });
  }

  async validate(payload: any) {
    return this.usersRepository.getById(payload.id);
  }
}
