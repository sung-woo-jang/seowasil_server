import { Injectable } from '@nestjs/common';
import { UsersRepository } from '../users/users.repository';

@Injectable()
export class AuthService {
  constructor(private userRepository: UsersRepository) {}

  async validateUser(account: string, password: string): Promise<any> {
    console.log('AuthService');

    const user = await this.userRepository.findByLogin(account, password);

    //사용자가 요청한 비밀번호와 DB에서 조회한 비밀번호 일치여부 검사
    // if (user && user.password === password) {
    if (user) {
      const { password, ...result } = user;

      //비밀번호를 제외하고 유저 정보를 반환
      return result;
    }
    return null;
  }
}
