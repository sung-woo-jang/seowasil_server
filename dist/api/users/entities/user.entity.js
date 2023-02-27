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
exports.User = exports.Role = void 0;
const order_entity_1 = require("./../../orders/entities/order.entity");
const common_entity_1 = require("../../../common/entities/common.entity");
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
const typeorm_1 = require("typeorm");
const deliver_address_entity_1 = require("../../deliver-address/entities/deliver-address.entity");
var Role;
(function (Role) {
    Role["ADMIN"] = "ADMIN";
    Role["CUSTOMER"] = "CUSTOMER";
})(Role = exports.Role || (exports.Role = {}));
let User = class User extends common_entity_1.CommonEntity {
};
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: '아이디를 입력해주세요' }),
    (0, typeorm_1.Column)({ type: 'varchar', comment: '계정', nullable: false }),
    __metadata("design:type", String)
], User.prototype, "account", void 0);
__decorate([
    (0, class_transformer_1.Exclude)(),
    (0, typeorm_1.Column)({ type: 'varchar', comment: '비밀번호', nullable: false }),
    __metadata("design:type", String)
], User.prototype, "password", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)({ message: '이름을 작성해주세요.' }),
    (0, typeorm_1.Column)({ type: 'varchar', comment: '사용자 이름', nullable: false }),
    __metadata("design:type", String)
], User.prototype, "name", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: '전화번호를 입력해주세요' }),
    (0, typeorm_1.Column)({ type: 'varchar', comment: '전화번호', nullable: false }),
    __metadata("design:type", String)
], User.prototype, "phoneNumber", void 0);
__decorate([
    (0, class_validator_1.IsEmail)(),
    (0, typeorm_1.Column)({ type: 'varchar', comment: '이메일', nullable: true }),
    __metadata("design:type", String)
], User.prototype, "email", void 0);
__decorate([
    (0, class_validator_1.IsBoolean)(),
    (0, typeorm_1.Column)({ type: 'varchar', comment: '유저 권한', default: 'CUSTOMER' }),
    __metadata("design:type", String)
], User.prototype, "role", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    (0, class_transformer_1.Exclude)(),
    __metadata("design:type", String)
], User.prototype, "currentHashedRefreshToken", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => deliver_address_entity_1.DeliverAddress),
    (0, typeorm_1.JoinColumn)({ name: 'address_id', referencedColumnName: 'id' }),
    __metadata("design:type", deliver_address_entity_1.DeliverAddress)
], User.prototype, "address", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => order_entity_1.Order, (order) => order.user, {
        cascade: true,
    }),
    __metadata("design:type", Array)
], User.prototype, "orders", void 0);
User = __decorate([
    (0, typeorm_1.Index)(['account', 'email', 'phoneNumber'], { unique: true }),
    (0, typeorm_1.Entity)()
], User);
exports.User = User;
//# sourceMappingURL=user.entity.js.map