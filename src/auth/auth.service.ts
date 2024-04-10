import { ForbiddenException, Injectable } from '@nestjs/common';
import * as bcrypt from 'bcryptjs';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import { DataSource } from 'typeorm';
import { User } from '@app/users/entities/user.entity';
import { CreateUserAndAddressDto } from '@app/users/dto/create-user.dto';
import { UsersRepository } from '@app/users/users.repository';
import { UsersService } from '@app/users/users.service';

@Injectable()
export class AuthService {
  constructor(
    private readonly dataSource: DataSource,
    private readonly userRepository: UsersRepository,
    private readonly userService: UsersService,
    private jwtService: JwtService,
    private readonly configService: ConfigService,
  ) {}

  async createUser(createUserAndAddressDto: CreateUserAndAddressDto) {
    const { ...createUserDto } = createUserAndAddressDto;

    const hashedPassword = await bcrypt.hash(
      createUserDto.password,
      await bcrypt.genSalt(),
    );
    const user = await this.dataSource.transaction(async (manager) => {
      const user = await manager
        .withRepository(this.userRepository)
        .createUser({ ...createUserDto, password: hashedPassword });

      return user;
    });
    return await this.userService.findById(user.id);
  }

  async validateUser(account: string, password: string): Promise<any> {
    const user = await this.userRepository.findUserByAccount(account);
    //사용자가 요청한 비밀번호와 DB에서 조회한 비밀번호 일치여부 검사
    if (user && (await bcrypt.compare(password, user.password))) {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { password, ...result } = user;

      //비밀번호를 제외하고 유저 정보를 반환
      return result;
    }

    throw new ForbiddenException('아이디와 비밀번호를 다시 확인해주세요.');
  }

  async login(user: User) {
    const token = this.jwtService.sign({ id: user.id });
    return {
      token: token,
      domain: 'localhost',
      path: '/',
      httpOnly: true,
      maxAge: Number(this.configService.get('JWT_EXPIRESIN')),
    };
  }

  logOut() {
    return {
      token: '',
      domain: 'localhost',
      path: '/',
      httpOnly: true,
      maxAge: 0,
    };
  }
}
