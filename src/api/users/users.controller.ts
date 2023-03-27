import { JwtRefreshGuard } from './../auth/guards/jwt-refresh.guard';
import { AuthService } from './../auth/auth.service';
import { LocalAuthGuard } from './../auth/guards/local-auth.guard';
import {
  Controller,
  Post,
  Body,
  UseGuards,
  Request,
  Get,
  Res,
  Param,
  ParseIntPipe,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/user.entity';
import { Response } from 'express';
import { Public } from 'src/common/decorators/skip-auth.decorator';

@Public()
@Controller('users')
export class UsersController {
  constructor(
    private readonly usersService: UsersService,
    private authService: AuthService,
  ) {}

  @Post('/signup')
  signUp(@Body() createUserDto: CreateUserDto): Promise<User> {
    return this.usersService.signUp(createUserDto);
  }

  @UseGuards(LocalAuthGuard)
  @Post('/signin')
  async signIn(@Request() req, @Res({ passthrough: true }) res: Response) {
    const { user } = req;
    const { accessToken, ...accessOption } =
      this.authService.getCookieWithJwtAccessToken(user);

    const { refreshToken, ...refreshOption } =
      this.authService.getCookieWithJwtRefreshToken(user.id);

    await this.usersService.setCurrentRefreshToken(refreshToken, user.id);

    res.cookie('AccessToken', accessToken, accessOption);
    res.cookie('RefreshToken', refreshToken, refreshOption);

    return { user };
  }

  @UseGuards(JwtRefreshGuard)
  @Post('logout')
  async logOut(@Request() req, @Res({ passthrough: true }) res: Response) {
    const { accessOption, refreshOption } =
      this.authService.getCookiesForLogOut();

    await this.usersService.removeRefreshToken(req.user.id);

    res.cookie('AccessToken', '', accessOption);
    res.cookie('RefreshToken', '', refreshOption);
  }

  @Get('/cookies')
  getCookies(@Request() req, @Res() res: Response): any {
    const jwt = req.cookies['AccessToken'];
    return res.send(jwt);
  }

  @UseGuards(JwtRefreshGuard)
  @Get('refresh')
  refresh(@Request() req, @Res({ passthrough: true }) res: Response) {
    const user = req.user;
    const { accessToken, ...accessOption } =
      this.authService.getCookieWithJwtAccessToken(user.id);
    res.cookie('AccessToken', accessToken, accessOption);
    return user;
  }

  @Get('/:id')
  async getUserById(@Param('id', ParseIntPipe) id: number) {
    return await this.usersService.getUserById(id);
  }
}
