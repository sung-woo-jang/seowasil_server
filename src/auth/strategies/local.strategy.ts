import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthService } from '../auth.service';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy, 'local') {
  constructor(private authService: AuthService) {
    // usernaem 키 이름 변경 user_id로 요청
    super({
      usernameField: 'account',
    });
  }

  // 일단 로그인 할 때만 사용하는 용도로 작성.
  async validate(account: string, password: string): Promise<any> {
    const user = await this.authService.validateUser(account, password);
    if (!user) {
      throw new UnauthorizedException();
    }
    return user;
  }
}
