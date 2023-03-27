import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import { IS_PUBLIC_KEY } from '../../common/decorators/skip-auth.decorator';
import { Reflector } from '@nestjs/core';
import {
  Injectable,
  ExecutionContext,
  ForbiddenException,
  HttpException,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {
  constructor(
    private readonly configService: ConfigService,
    private readonly jwtService: JwtService,
    private readonly reflector: Reflector,
  ) {
    super();
  }

  canActivate(context: ExecutionContext): boolean {
    // Public 데코레이터를 쓰면 프리패스
    const isPublic = this.reflector.getAllAndOverride<boolean>(IS_PUBLIC_KEY, [
      context.getHandler(),
      context.getClass(),
    ]);

    if (isPublic) {
      return true;
    }
    const req = context.switchToHttp().getRequest();

    const token = req?.cookies?.AccessToken;
    if (!token) {
      throw new ForbiddenException('회원가입 또는 로그인이 필요합니다.');
    }
    req.user = this.validateToken(token);
    if (!req.user) {
      throw new ForbiddenException('존재하지 않는 사용자입니다.');
    }
    return true;
  }

  validateToken(token: string) {
    try {
      const verify = this.jwtService.verify(token, {
        secret: this.configService.get('JWT_SECRET_KEY'),
      });
      return verify;
    } catch (e) {
      switch (e.name) {
        case 'JsonWebTokenError':
          throw new HttpException('유효하지 않은 토큰', 401);

        case 'TokenExpiredError':
          throw new HttpException('토큰 만료', 410);

        default:
          throw new HttpException('서버 오류', 500);
      }
    }
  }
}
