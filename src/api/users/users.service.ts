import { DeliverAddressRepository } from './../deliver-address/deliver-address.repository';
import { User } from './entities/user.entity';
import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { UsersRepository } from './users.repository';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UsersRepository) private usersRepository: UsersRepository,
    @InjectRepository(DeliverAddressRepository)
    private deliverAddressRepository: DeliverAddressRepository,
  ) {}

  async signUp(createUserDto: CreateUserDto): Promise<User> {
    const { address1, address2, address3 } = createUserDto;
    const user = await this.usersRepository.createUser(createUserDto);
    await this.deliverAddressRepository.createAddress(
      { address1, address2, address3, user_id: user.id },
      user,
    );
    return user;
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

  async getUserById(id: number) {
    return await this.usersRepository.getById(id);
  }
}
