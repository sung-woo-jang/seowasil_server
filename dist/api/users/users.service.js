"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const users_repository_1 = require("./users.repository");
const deliver_address_repository_1 = require("../deliver-address/deliver-address.repository");
let UsersService = class UsersService {
    constructor(usersRepository, deliverAddressRepository) {
        this.usersRepository = usersRepository;
        this.deliverAddressRepository = deliverAddressRepository;
    }
    async signUp(createUserDto) {
        const { address1, address2, address3 } = createUserDto;
        const address = await this.deliverAddressRepository.createAddress(address1, address2, address3);
        return this.usersRepository.createUser(createUserDto, address);
    }
    async setCurrentRefreshToken(refreshToken, id) {
        await this.usersRepository.setCurrentRefreshToken(refreshToken, id);
    }
    async removeRefreshToken(id) {
        return this.usersRepository.update(id, {
            currentHashedRefreshToken: null,
        });
    }
};
UsersService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(users_repository_1.UsersRepository)),
    __param(1, (0, typeorm_1.InjectRepository)(deliver_address_repository_1.DeliverAddressRepository)),
    __metadata("design:paramtypes", [users_repository_1.UsersRepository,
        deliver_address_repository_1.DeliverAddressRepository])
], UsersService);
exports.UsersService = UsersService;
//# sourceMappingURL=users.service.js.map