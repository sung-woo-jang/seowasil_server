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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product = exports.Status = void 0;
const typeorm_1 = require("typeorm");
const common_entity_1 = require("../../../common/entities/common.entity");
const class_validator_1 = require("class-validator");
const category_entity_1 = require("../../categories/entities/category.entity");
const product_image_entity_1 = require("../../product-images/entities/product-image.entity");
const order_entity_1 = require("./../../orders/entities/order.entity");
const product_thumbnail_entity_1 = require("../../product-thumbnail/entities/product-thumbnail.entity");
const cart_entity_1 = require("../../carts/entities/cart.entity");
var Status;
(function (Status) {
    Status["SALE"] = "\uD310\uB9E4\uC911";
    Status["PREPARING"] = "\uC0C1\uD488 \uC900\uBE44\uC911";
    Status["SOLDOUT"] = "\uD488\uC808";
})(Status = exports.Status || (exports.Status = {}));
let Product = class Product extends common_entity_1.CommonEntity {
};
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', comment: '상품명', nullable: false }),
    __metadata("design:type", String)
], Product.prototype, "title", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', comment: '상품 설명', nullable: false }),
    __metadata("design:type", String)
], Product.prototype, "description", void 0);
__decorate([
    (0, class_validator_1.IsNumberString)(),
    (0, typeorm_1.Column)({ type: 'integer', comment: '상품 가격', nullable: true }),
    __metadata("design:type", Number)
], Product.prototype, "prevPrice", void 0);
__decorate([
    (0, class_validator_1.IsNumberString)(),
    (0, typeorm_1.Column)({ type: 'integer', comment: '판매 가격', nullable: false }),
    __metadata("design:type", Number)
], Product.prototype, "sellPrice", void 0);
__decorate([
    (0, class_validator_1.IsNumberString)(),
    (0, typeorm_1.Column)({ type: 'integer', comment: '최소 주문 수량', nullable: false }),
    __metadata("design:type", Number)
], Product.prototype, "minAmount", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'varchar',
        comment: '판매 상태',
        nullable: false,
        default: Status.SALE,
    }),
    __metadata("design:type", String)
], Product.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'integer',
        comment: '상품 설명',
        nullable: false,
        default: 0,
    }),
    __metadata("design:type", Number)
], Product.prototype, "viewCount", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => category_entity_1.Category, (category) => category.product, {
        onDelete: 'CASCADE',
    }),
    (0, typeorm_1.JoinColumn)([
        {
            name: 'category_id',
            referencedColumnName: 'id',
        },
    ]),
    __metadata("design:type", category_entity_1.Category)
], Product.prototype, "category", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => order_entity_1.Order, (order) => order),
    __metadata("design:type", Array)
], Product.prototype, "order", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => cart_entity_1.Cart, (cart) => cart),
    __metadata("design:type", Array)
], Product.prototype, "cart", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => product_image_entity_1.ProductImage),
    (0, typeorm_1.JoinColumn)({ name: 'productImage_id', referencedColumnName: 'id' }),
    __metadata("design:type", product_image_entity_1.ProductImage)
], Product.prototype, "productImageUrl", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => product_thumbnail_entity_1.ProductThumbnail),
    (0, typeorm_1.JoinColumn)({
        name: 'productThumbnailImageUrl_id',
        referencedColumnName: 'id',
    }),
    __metadata("design:type", product_thumbnail_entity_1.ProductThumbnail)
], Product.prototype, "productThumbnailImageUrl", void 0);
Product = __decorate([
    (0, typeorm_1.Entity)()
], Product);
exports.Product = Product;
//# sourceMappingURL=product.entity.js.map