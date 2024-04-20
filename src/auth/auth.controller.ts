import {
  Body,
  Controller,
  Post,
  Request,
  Res,
  UseGuards,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './guards/local-auth.guard';
import { Response } from 'express';
import { JwtAuthGuard } from './guards/jwt-auth.guard';
import { Public } from '@common/decorators/skip-auth.decorator';
import { CreateUserDto } from '@app/users/dto/create-user.dto';

@Public()
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('signup')
  createUser(@Body() createUserDto: CreateUserDto) {
    return this.authService.createUser(createUserDto);
  }

  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(@Request() req, @Res({ passthrough: true }) res: Response) {
    const { token, ...option } = await this.authService.login(req.user);
    res.cookie('Authentication', token, option);
  }

  // 로그아웃
  @UseGuards(JwtAuthGuard)
  @Post('logout')
  async logOut(@Res({ passthrough: true }) res: Response) {
    const option = this.authService.logOut();
    res.cookie('Authentication', '', option);
  }
}
