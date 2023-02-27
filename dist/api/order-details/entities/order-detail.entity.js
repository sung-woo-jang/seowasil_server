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
exports.OrderDetail = void 0;
const order_entity_1 = require("./../../orders/entities/order.entity");
const common_entity_1 = require("../../../common/entities/common.entity");
const typeorm_1 = require("typeorm");
let OrderDetail = class OrderDetail extends common_entity_1.CommonEntity {
};
__decorate([
    (0, typeorm_1.Column)({ type: 'integer', comment: '주문수량', nullable: false }),
    __metadata("design:type", Number)
], OrderDetail.prototype, "amount", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'integer',
        comment: '결제 금액(주문수량 * 제품가격)',
        nullable: false,
    }),
    __metadata("design:type", Number)
], OrderDetail.prototype, "price", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => order_entity_1.Order, (orders) => orders.orderDetail, {
        onDelete: 'SET NULL',
    }),
    (0, typeorm_1.JoinColumn)([
        {
            name: 'order_id',
            referencedColumnName: 'id',
        },
    ]),
    __metadata("design:type", order_entity_1.Order)
], OrderDetail.prototype, "orders", void 0);
OrderDetail = __decorate([
    (0, typeorm_1.Entity)()
], OrderDetail);
exports.OrderDetail = OrderDetail;
//# sourceMappingURL=order-detail.entity.js.map