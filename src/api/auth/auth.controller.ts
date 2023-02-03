import { Controller, Res, Request, Get, UseGuards } from '@nestjs/common';
import { JwtRefreshGuard } from './guards/jwt-refresh.guard';
import { AuthService } from './auth.service';
import { Public } from 'src/common/decorators/skip-auth.decorator';
import { Response } from 'express';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Public()
  @UseGuards(JwtRefreshGuard)
  @Get('refresh')
  refresh(@Request() req, @Res({ passthrough: true }) res: Response) {
    const user = req.user;
    const { accessToken, ...accessOption } =
      this.authService.getCookieWithJwtAccessToken(user.id);
    res.cookie('Authentication', accessToken, accessOption);
    return user;
  }
}
