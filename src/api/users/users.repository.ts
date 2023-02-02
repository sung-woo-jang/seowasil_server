import { CreateUserDto } from './dto/create-user.dto';
import {
  ConflictException,
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
      return user;
    } catch (error) {
      if (error.code === '23505')
        throw new ConflictException('이미 있는 ID입니다.');
      else throw new InternalServerErrorException();
    }
  }
}
