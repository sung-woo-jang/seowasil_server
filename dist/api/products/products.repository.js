"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductsRepository = void 0;
const typeorm_1 = require("typeorm");
const product_entity_1 = require("./entities/product.entity");
let ProductsRepository = class ProductsRepository extends typeorm_1.Repository {
    async getProductDetail(id) {
        const query = this.createQueryBuilder('product');
        await query
            .update()
            .set({ viewCount: () => 'view_count + 1' })
            .where('id =:id', { id })
            .execute();
        const result = await query
            .leftJoinAndSelect('product.category', 'category')
            .leftJoinAndSelect('product.productImageUrl', 'productImageUrl')
            .select([
            'product.id',
            'product.title',
            'product.description',
            'product.prevPrice',
            'product.sellPrice',
            'product.minAmount',
            'product.viewCount',
            'category.name',
            'productImageUrl.storedFileName',
        ])
            .where('product.id = :id', { id })
            .getOne();
        return result;
    }
    async getProductList() {
        const query = this.createQueryBuilder('product');
        const result = await query
            .leftJoinAndSelect('product.category', 'category')
            .leftJoinAndSelect('product.productImageUrl', 'productImageUrl')
            .select([
            'product.id',
            'product.title',
            'product.description',
            'product.sellPrice',
            'product.createdAt',
            'productImageUrl.storedFileName',
            'category.name',
        ])
            .getMany();
        return result;
    }
};
ProductsRepository = __decorate([
    (0, typeorm_1.EntityRepository)(product_entity_1.Product)
], ProductsRepository);
exports.ProductsRepository = ProductsRepository;
//# sourceMappingURL=products.repository.js.map