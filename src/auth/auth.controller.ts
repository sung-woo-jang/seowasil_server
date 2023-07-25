import {
  Body,
  Controller,
  Post,
  Request,
  Res,
  UseGuards,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { Public } from 'src/common/decorators/skip-auth.decorator';
import { CreateUserDto } from 'src/api/users/dto/create-user.dto';
import { LocalAuthGuard } from './guards/local-auth.guard';
import { Response } from 'express';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Public()
  @Post('signup')
  createUser(@Body() createUserDto: CreateUserDto) {
    return this.authService.createUser(createUserDto);
  }

  @Public()
  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(@Request() req, @Res({ passthrough: true }) res: Response) {
    const { token, ...option } = await this.authService.login(req.user);
    res.cookie('Authentication', token, option);
  }

  // 로그아웃
}
