import { User } from 'src/api/users/entities/user.entity';
import { ConfigService } from '@nestjs/config';
import { UsersRepository } from '../users/users.repository';
import { JwtService } from '@nestjs/jwt';
export declare class AuthService {
    private userRepository;
    private jwtService;
    private configService;
    constructor(userRepository: UsersRepository, jwtService: JwtService, configService: ConfigService);
    validateUser(account: string, password: string): Promise<any>;
    getCookieWithJwtAccessToken(user: User): {
        accessToken: string;
        domain: string;
        path: string;
        httpOnly: boolean;
        maxAge: number;
    };
    getCookieWithJwtRefreshToken(id: number): {
        refreshToken: string;
        domain: string;
        path: string;
        httpOnly: boolean;
        maxAge: number;
    };
    getCookiesForLogOut(): {
        accessOption: {
            domain: string;
            path: string;
            httpOnly: boolean;
            maxAge: number;
        };
        refreshOption: {
            domain: string;
            path: string;
            httpOnly: boolean;
            maxAge: number;
        };
    };
}
