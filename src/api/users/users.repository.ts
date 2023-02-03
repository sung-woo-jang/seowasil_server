import { CreateUserDto } from './dto/create-user.dto';
import {
  ConflictException,
  ForbiddenException,
  HttpException,
  HttpStatus,
  InternalServerErrorException,
} from '@nestjs/common';
import { EntityRepository, Repository } from 'typeorm';
import { User } from './entities/user.entity';
import * as bcrypt from 'bcryptjs';

@EntityRepository(User)
export class UsersRepository extends Repository<User> {
  async createUser(createUserDto: CreateUserDto): Promise<User> {
    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(createUserDto.password, salt);

    try {
      const user = await this.save({
        ...createUserDto,
        password: hashedPassword,
      });

      delete user.password;

      return user;
    } catch (error) {
      if (error.code === '23505')
        throw new ConflictException('이미 있는 ID입니다.');
      else throw new InternalServerErrorException();
    }
  }

  //로그인 유저 조회
  async findByLogin(account: string): Promise<User> {
    const user = await this.findOne({ where: { account } });

    if (user) return user;
    else throw new ForbiddenException('아이디와 비밀번호를 다시 확인해주세요.');
  }

  async getById(id: number) {
    const user = await this.findOne({ id });
    if (user) {
      return user;
    }

    throw new HttpException(
      'User with this id does not exist',
      HttpStatus.NOT_FOUND,
    );
  }

  // DB에 발급받은 Refresh Token 암호화
  async setCurrentRefreshToken(refreshToken: string, id: number) {
    const currentHashedRefreshToken = await bcrypt.hash(refreshToken, 10);
    await this.update(id, { currentHashedRefreshToken });
  }

  async getUserIfRefreshTokenMatches(refreshToken: string, id: number) {
    const user = await this.findOne(id);

    const isRefreshTokenMatching = await bcrypt.compare(
      refreshToken,
      user.currentHashedRefreshToken,
    );

    if (isRefreshTokenMatching) {
      return user;
    }
  }
}
