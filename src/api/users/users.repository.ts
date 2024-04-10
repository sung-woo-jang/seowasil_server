import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { CustomRepository } from 'src/database/repository/repository.decorator';

@CustomRepository(User)
export class UsersRepository extends Repository<User> {
  async createUser(user: CreateUserDto): Promise<User> {
    return await this.save(user);
  }

  async findUser(username: string): Promise<User | undefined> {
    return this.findOne({
      where: {
        username,
      },
    });
  }

  async findById(id: number): Promise<User> {
    return await this.createQueryBuilder('user')
      .leftJoinAndSelect('user.address', 'address')
      .where('user.id = :id', { id })
      .select([
        'user.id',
        'user.username',
        'user.account',
        'user.phoneNumber',
        'user.role',
        'user.password',
        'address.id',
        'address.zoneCode',
        'address.roadAddress',
        'address.detailAddress',
      ])
      .getOne();
  }

  // 유저 정보 조회
  async findUserByAccount(account: string): Promise<User> {
    return await this.createQueryBuilder('user')
      .leftJoinAndSelect('user.address', 'address')
      .where('user.account = :account', { account })
      .select([
        'user.id',
        'user.username',
        'user.phoneNumber',
        'user.role',
        'user.password',
        'address.id',
        'address.zoneCode',
        'address.roadAddress',
        'address.detailAddress',
      ])
      .getOne();
  }
}

export const UserRepositoryExtends = {
  async createUser(user: CreateUserDto): Promise<User> {
    return await this.save(user);
  },
};
