import { AuthService } from './../auth/auth.service';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/user.entity';
import { Response } from 'express';
export declare class UsersController {
    private readonly usersService;
    private authService;
    constructor(usersService: UsersService, authService: AuthService);
    signUp(createUserDto: CreateUserDto): Promise<User>;
    signIn(req: any, res: Response): Promise<{
        accessToken: string;
        refreshToken: string;
        user: any;
    }>;
    logOut(req: any, res: Response): Promise<void>;
    getCookies(req: any, res: Response): any;
    refresh(req: any, res: Response): any;
}
