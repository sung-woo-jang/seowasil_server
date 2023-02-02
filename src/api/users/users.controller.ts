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
    const token = await this.authService.login(req.user);
    res.cookie('Authentication', token, {
      domain: 'localhost',
      path: '/',
      httpOnly: true,
    });
  }

  @Post('/logout')
  logout(@Res() res: Response): any {
    res
      .cookie('Authentication', '', {
        maxAge: 0,
      })
      .send({
        message: 'success',
      });
  }

  @Get('/cookies')
  getCookies(@Request() req, @Res() res: Response): any {
    const jwt = req.cookies['Authentication'];
    return res.send(jwt);
  }
}
