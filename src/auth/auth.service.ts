import { Injectable } from '@nestjs/common';
import { UsersRepository } from 'src/api/users/users.repository';
import * as bcrypt from 'bcryptjs';
import { JwtService } from '@nestjs/jwt';
import { User } from 'src/api/users/entities/user.entity';
import { ConfigService } from '@nestjs/config';
import { CreateUserDto } from 'src/api/users/dto/create-user.dto';

@Injectable()
export class AuthService {
  constructor(
    private readonly userRepository: UsersRepository,
    private jwtService: JwtService,
    private readonly configService: ConfigService,
  ) {}

  async validateUser(account: string, password: string): Promise<any> {
    const user = await this.userRepository.findUserByAccount(account);
    //사용자가 요청한 비밀번호와 DB에서 조회한 비밀번호 일치여부 검사
    if (user && (await bcrypt.compare(password, user.password))) {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { password, ...result } = user;
      //비밀번호를 제외하고 유저 정보를 반환
      return result;
    }
    return null;
  }

  async createUser(createUserDto: CreateUserDto) {
    return await this.userRepository.createUser(createUserDto);
  }

  async login(user: User) {
    const token = this.jwtService.sign({ id: user.id });
    return {
      token: token,
      domain: 'localhost',
      path: '/',
      httpOnly: true,
      maxAge: Number(this.configService.get('JWT_EXPIRESIN')),
    };
  }

  async logOut() {
    return {
      token: '',
      domain: 'localhost',
      path: '/',
      httpOnly: true,
      maxAge: 0,
    };
  }
}
