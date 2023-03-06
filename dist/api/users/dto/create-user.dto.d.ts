import { User } from '../entities/user.entity';
declare const CreateUserDto_base: import("@nestjs/common").Type<Pick<User, "account" | "phoneNumber" | "name" | "email">>;
export declare class CreateUserDto extends CreateUserDto_base {
    password: string;
    address1: string;
    address2: string;
    address3: string;
}
export {};
