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
exports.CategoriesService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const categories_repository_1 = require("./categories.repository");
const category_entity_1 = require("./entities/category.entity");
let CategoriesService = class CategoriesService {
    constructor(categoriesRepository) {
        this.categoriesRepository = categoriesRepository;
    }
    async createCategory(createCategoryDto) {
        const result = await this.categoriesRepository.save(Object.assign({}, createCategoryDto));
        return result;
    }
    async getCategoryList() {
        const result = await this.categoriesRepository.find();
        return result;
    }
    async getCategory(id) {
        const result = await this.categoriesRepository
            .createQueryBuilder('category')
            .leftJoinAndSelect('category.product', 'product')
            .select([
            'category.id',
            'category.name',
            'product.title',
            'product.description',
        ])
            .where('category.id = :id', { id })
            .getMany();
        return result;
    }
    async updateCategory(updateCategoryDto, id) {
        const result = await this.categoriesRepository
            .createQueryBuilder('category')
            .update(category_entity_1.Category)
            .set(Object.assign({}, updateCategoryDto))
            .where('id = :id', { id })
            .execute();
        return result;
    }
    async deleteCategory(id) {
        return await this.categoriesRepository.softDelete(id);
    }
};
CategoriesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(categories_repository_1.CategoriesRepository)),
    __metadata("design:paramtypes", [categories_repository_1.CategoriesRepository])
], CategoriesService);
exports.CategoriesService = CategoriesService;
//# sourceMappingURL=categories.service.js.map