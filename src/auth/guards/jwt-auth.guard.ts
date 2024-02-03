import { IS_PUBLIC_KEY } from '@common/decorators/skip-auth.decorator';
import {
  ExecutionContext,
  HttpException,
  HttpStatus,
  Injectable,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { AuthGuard } from '@nestjs/passport';

@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {
  constructor(private reflector: Reflector) {
    super();
  }

  canActivate(context: ExecutionContext) {
    const request = context.switchToHttp().getRequest();
    const isPublic = this.reflector.getAllAndOverride<boolean>(IS_PUBLIC_KEY, [
      context.getHandler(),
      context.getClass(),
    ]);
    if (isPublic) {
      return true;
    }
    if (request.cookies.Authentication === undefined) {
      throw new HttpException(
        '이 ID를 가진 사용자가 없습니다.',
        HttpStatus.NOT_FOUND,
      );
    }

    return super.canActivate(context);
  }
}
