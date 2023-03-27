import {
  Injectable,
  CanActivate,
  ExecutionContext,
  ForbiddenException,
  HttpException,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { Role } from 'src/api/users/entities/user.entity';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(
    private reflector: Reflector,
    private readonly configService: ConfigService,
    private readonly jwtService: JwtService,
  ) {}

  canActivate(context: ExecutionContext): boolean {
    const requiredRoles = this.reflector.getAllAndOverride<Role>('roles', [
      context.getHandler(),
      context.getClass(),
    ]);

    if (!requiredRoles) {
      // roles 정보가 없다면 true 반환하여 모든 사용자가 접근 가능하게 함
      return true;
    }

    const req = context.switchToHttp().getRequest();
    const token = req?.cookies?.AccessToken;
    req.user = this.validateToken(token); // AccessToken이 유효한지 검증하여, 검증 결과를 HTTP 요청 객체에 저장
    const permssion = requiredRoles.includes(req.user.role);
    if (!permssion) {
      throw new ForbiddenException('접근 권한이 없는 사용자입니다.');
    }
    return true;
  }

  validateToken(token: string) {
    const secretKey = this.configService.get<string>('JWT_SECRET_KEY')
      ? this.configService.get<string>('JWT_SECRET_KEY')
      : 'dev';

    try {
      const verify = this.jwtService.verify(token, { secret: secretKey }); // JWT 토큰 검증
      return verify; // 검증 결과 반환
    } catch (e) {
      // 검증 과정에서 오류가 발생한 경우, 오류의 종류에 따라 HttpException 발생시킴
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
