"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersRepository = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const user_entity_1 = require("./entities/user.entity");
const bcrypt = require("bcryptjs");
let UsersRepository = class UsersRepository extends typeorm_1.Repository {
    async createUser(createUserDto, address) {
        const salt = await bcrypt.genSalt();
        const hashedPassword = await bcrypt.hash(createUserDto.password, salt);
        try {
            const user = await this.save(Object.assign(Object.assign({ address }, createUserDto), { password: hashedPassword }));
            delete user.password;
            return user;
        }
        catch (error) {
            if (error.code === '23505')
                throw new common_1.ConflictException('이미 있는 ID입니다.');
            else
                throw new common_1.InternalServerErrorException();
        }
    }
    async findByLogin(account) {
        const user = await this.createQueryBuilder('user')
            .leftJoinAndSelect('user.address', 'address')
            .where('user.account = :account', { account })
            .select([
            'user.id',
            'user.name',
            'user.phoneNumber',
            'user.role',
            'user.password',
        ])
            .getOne();
        if (user)
            return user;
        else
            throw new common_1.ForbiddenException('아이디와 비밀번호를 다시 확인해주세요.');
    }
    async getById(id) {
        const user = await this.findOne({ id });
        if (user) {
            return user;
        }
        throw new common_1.HttpException('User with this id does not exist', common_1.HttpStatus.NOT_FOUND);
    }
    async setCurrentRefreshToken(refreshToken, id) {
        const currentHashedRefreshToken = await bcrypt.hash(refreshToken, 10);
        await this.update(id, { currentHashedRefreshToken });
    }
    async getUserIfRefreshTokenMatches(refreshToken, id) {
        const user = await this.findOne(id);
        const isRefreshTokenMatching = await bcrypt.compare(refreshToken, user.currentHashedRefreshToken);
        if (isRefreshTokenMatching) {
            return user;
        }
    }
};
UsersRepository = __decorate([
    (0, typeorm_1.EntityRepository)(user_entity_1.User)
], UsersRepository);
exports.UsersRepository = UsersRepository;
//# sourceMappingURL=users.repository.js.map