import { CreateUserDto } from './dto/create-user.dto';
import { DataSource, Repository } from 'typeorm';
import { User } from './entities/user.entity';
import {
  ConflictException,
  ForbiddenException,
  HttpException,
  HttpStatus,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import * as bcrypt from 'bcryptjs';

@Injectable()
export class UsersRepository extends Repository<User> {
  constructor(private readonly dataSource: DataSource) {
    const baseRepository = dataSource.getRepository(User);
    super(
      baseRepository.target,
      baseRepository.manager,
      baseRepository.queryRunner,
    );
  }

  async createUser(createUserDto: CreateUserDto) {
    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(createUserDto.password, salt);

    try {
      const user = this.create({
        ...createUserDto,
        password: hashedPassword,
      });

      await this.dataSource.transaction(async (transactionalEntityManager) => {
        await transactionalEntityManager.save(user);
      });

      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      // const { password, ...result } = user;

      return user;
    } catch (error) {
      if (error.code === '23505') {
        throw new ConflictException('이미 있는 ID입니다.');
      } else {
        throw new InternalServerErrorException();
      }
    }
  }

  async findUser(username: string): Promise<User | undefined> {
    // return this.findOneBy({ name:username });
    return this.findOne({
      where: {
        username,
      },
    });
  }

  async findById(id: number): Promise<User> {
    const user = await this.createQueryBuilder('user')
      .where('user.id = :id', { id })
      .getOne();

    if (user) return user;

    throw new HttpException(
      '이 ID를 가진 사용자가 없습니다.',
      HttpStatus.NOT_FOUND,
    );
  }

  // 유저 정보 조회
  async findUserByAccount(account: string): Promise<User> {
    const user = await this.createQueryBuilder('user')
      .where('user.account = :account', { account })
      .getOne();

    if (user) return user;
    else throw new ForbiddenException('아이디와 비밀번호를 다시 확인해주세요.');
  }
}
