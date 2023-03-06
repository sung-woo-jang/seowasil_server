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
exports.CartsService = void 0;
const users_repository_1 = require("./../users/users.repository");
const typeorm_1 = require("@nestjs/typeorm");
const common_1 = require("@nestjs/common");
const carts_repository_1 = require("./carts.repository");
const products_repository_1 = require("../products/products.repository");
let CartsService = class CartsService {
    constructor(cartsRepository, productsRepository, usersRepository) {
        this.cartsRepository = cartsRepository;
        this.productsRepository = productsRepository;
        this.usersRepository = usersRepository;
    }
    async createCart(createCartDto) {
        const product = await this.productsRepository.findOne({
            id: createCartDto.product_id,
        });
        if (product.minAmount > createCartDto.amount)
            throw new common_1.BadRequestException('최소 주문 수량이 맞지 않습니다.');
        const user = await this.usersRepository.findOne({
            id: createCartDto.user_id,
        });
        const cart = await this.cartsRepository
            .create(Object.assign(Object.assign({}, createCartDto), { product,
            user }))
            .save();
        return await this.cartsRepository.getCartDetail(cart.id);
    }
    async getCartDetail(id) {
        return await this.cartsRepository.getCartDetail(id);
    }
    async getCartList() {
        return await this.cartsRepository.find();
    }
    async updateCart() {
        return await this.cartsRepository.find();
    }
    async deleteCart() {
        return await this.cartsRepository.find();
    }
};
CartsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(carts_repository_1.CartsRepository)),
    __param(1, (0, typeorm_1.InjectRepository)(products_repository_1.ProductsRepository)),
    __param(2, (0, typeorm_1.InjectRepository)(users_repository_1.UsersRepository)),
    __metadata("design:paramtypes", [carts_repository_1.CartsRepository,
        products_repository_1.ProductsRepository,
        users_repository_1.UsersRepository])
], CartsService);
exports.CartsService = CartsService;
//# sourceMappingURL=carts.service.js.map