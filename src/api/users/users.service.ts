import { User } from './entities/user.entity';
import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { UsersRepository } from './users.repository';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UsersRepository) private usersRepository: UsersRepository,
  ) {}

  async signUp(createUserDto: CreateUserDto): Promise<User> {
    return this.usersRepository.createUser(createUserDto);
  }

  // DB에 발급받은 Refresh Token 암호화
  async setCurrentRefreshToken(refreshToken: string, id: number) {
    await this.usersRepository.setCurrentRefreshToken(refreshToken, id);
  }

  async removeRefreshToken(id: number) {
    return this.usersRepository.update(id, {
      currentHashedRefreshToken: null,
    });
  }
}
