import { UsersRepository } from './users.repository';
import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  constructor(private readonly usersRepository: UsersRepository) {}

  async findById(id: number) {
    return await this.usersRepository.findById(id);
  }
}
