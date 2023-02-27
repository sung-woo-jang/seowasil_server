import { UsersRepository } from './../../users/users.repository';
import { ConfigService } from '@nestjs/config';
import { Strategy } from 'passport-jwt';
declare const JwtRefreshStrategy_base: new (...args: any[]) => Strategy;
export declare class JwtRefreshStrategy extends JwtRefreshStrategy_base {
    private readonly configService;
    private usersRepository;
    constructor(configService: ConfigService, usersRepository: UsersRepository);
    validate(req: any, payload: any): Promise<import("../../users/entities/user.entity").User>;
}
export {};
