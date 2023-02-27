import { User } from './entities/user.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { UsersRepository } from './users.repository';
import { DeliverAddressRepository } from '../deliver-address/deliver-address.repository';
export declare class UsersService {
    private usersRepository;
    private deliverAddressRepository;
    constructor(usersRepository: UsersRepository, deliverAddressRepository: DeliverAddressRepository);
    signUp(createUserDto: CreateUserDto): Promise<User>;
    setCurrentRefreshToken(refreshToken: string, id: number): Promise<void>;
    removeRefreshToken(id: number): Promise<import("typeorm").UpdateResult>;
}
