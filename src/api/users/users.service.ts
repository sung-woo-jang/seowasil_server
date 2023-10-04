import { UsersRepository } from './users.repository';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  constructor(private readonly usersRepository: UsersRepository) {}

  async findById(id: number) {
    const user = await this.usersRepository.findById(id);
    if (user) return user;

    throw new HttpException(
      '이 ID를 가진 사용자가 없습니다.',
      HttpStatus.NOT_FOUND,
    );
  }
}
