import { DeliverAddress } from './../deliver-address/entities/deliver-address.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
export declare class UsersRepository extends Repository<User> {
    createUser(createUserDto: CreateUserDto, address: DeliverAddress): Promise<User>;
    findByLogin(account: string): Promise<User>;
    getById(id: number): Promise<User>;
    setCurrentRefreshToken(refreshToken: string, id: number): Promise<void>;
    getUserIfRefreshTokenMatches(refreshToken: string, id: number): Promise<User>;
}
