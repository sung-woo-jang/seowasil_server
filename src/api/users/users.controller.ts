import { Controller, Get, Request } from '@nestjs/common';
import { UsersService } from './users.service';
import { GetProfileResponseDto } from './dto/getProfileResponse.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get('profile')
  getProfile(@Request() req): Promise<GetProfileResponseDto> {
    return req.user;
  }
}
