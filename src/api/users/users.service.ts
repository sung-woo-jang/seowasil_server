import { UsersRepository } from './users.repository';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  constructor(private readonly usersRepository: UsersRepository) {}

  async findById(id: number) {
    const user = await this.usersRepository.findById(id);

    if (user) {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { password, account, ...result } = user;
      return result;
    }
    throw new HttpException(
      '이 ID를 가진 사용자가 없습니다.',
      HttpStatus.NOT_FOUND,
    );
  }
}
