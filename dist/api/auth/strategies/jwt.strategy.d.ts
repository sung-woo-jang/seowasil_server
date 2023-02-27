import { UsersRepository } from './../../users/users.repository';
import { Strategy } from 'passport-jwt';
import { ConfigService } from '@nestjs/config';
declare const JwtStrategy_base: new (...args: any[]) => Strategy;
export declare class JwtStrategy extends JwtStrategy_base {
    private configService;
    private usersRepository;
    constructor(configService: ConfigService, usersRepository: UsersRepository);
    validate(payload: any): Promise<import("../../users/entities/user.entity").User>;
}
export {};
