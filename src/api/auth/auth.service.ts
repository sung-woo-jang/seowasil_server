import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';
import { UsersRepository } from '../users/users.repository';
import * as bcrypt from 'bcryptjs';
import { JwtService } from '@nestjs/jwt';
import { User } from '../users/entities/user.entity';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(UsersRepository)
    private userRepository: UsersRepository,
    private jwtService: JwtService,
  ) {}

  async validateUser(account: string, password: string): Promise<any> {
    const user = await this.userRepository.findByLogin(account);

    //사용자가 요청한 비밀번호와 DB에서 조회한 비밀번호 일치여부 검사
    // if (user && user.password === password) {
    if (user && (await bcrypt.compare(password, user.password))) {
      const { password, ...result } = user;
      //비밀번호를 제외하고 유저 정보를 반환
      return result;
    }
    return null;
  }

  async login(user: User) {
    const payload = { username: user.name, sub: user.id };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
