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
exports.Order = void 0;
const product_entity_1 = require("../../products/entities/product.entity");
const order_detail_entity_1 = require("./../../order-details/entities/order-detail.entity");
const typeorm_1 = require("typeorm");
const common_entity_1 = require("../../../common/entities/common.entity");
const user_entity_1 = require("../../users/entities/user.entity");
let Order = class Order extends common_entity_1.CommonEntity {
};
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', comment: '우편번호', nullable: false }),
    __metadata("design:type", String)
], Order.prototype, "address1", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', comment: '주소', nullable: false }),
    __metadata("design:type", String)
], Order.prototype, "address2", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', comment: '상세주소', nullable: false }),
    __metadata("design:type", String)
], Order.prototype, "address3", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', comment: '배송 요청사항', nullable: true }),
    __metadata("design:type", String)
], Order.prototype, "deliveryRequest", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.User, (user) => user.orders, {
        onDelete: 'CASCADE',
    }),
    (0, typeorm_1.JoinColumn)([
        {
            name: 'user_id',
            referencedColumnName: 'id',
        },
    ]),
    __metadata("design:type", user_entity_1.User)
], Order.prototype, "user", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => order_detail_entity_1.OrderDetail, (orderDetail) => orderDetail.orders, {
        cascade: true,
    }),
    __metadata("design:type", Array)
], Order.prototype, "orderDetail", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => product_entity_1.Product, (product) => product.orderDetail),
    (0, typeorm_1.JoinColumn)([
        {
            name: 'product_id',
            referencedColumnName: 'id',
        },
    ]),
    __metadata("design:type", product_entity_1.Product)
], Order.prototype, "product", void 0);
Order = __decorate([
    (0, typeorm_1.Entity)()
], Order);
exports.Order = Order;
//# sourceMappingURL=order.entity.js.map