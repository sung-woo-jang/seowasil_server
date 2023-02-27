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
exports.DeliverAddress = void 0;
const typeorm_1 = require("typeorm");
const common_entity_1 = require("../../../common/entities/common.entity");
let DeliverAddress = class DeliverAddress extends common_entity_1.CommonEntity {
};
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', comment: '우편번호', nullable: false }),
    __metadata("design:type", String)
], DeliverAddress.prototype, "address1", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', comment: '주소', nullable: false }),
    __metadata("design:type", String)
], DeliverAddress.prototype, "address2", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', comment: '상세주소', nullable: false }),
    __metadata("design:type", String)
], DeliverAddress.prototype, "address3", void 0);
DeliverAddress = __decorate([
    (0, typeorm_1.Entity)()
], DeliverAddress);
exports.DeliverAddress = DeliverAddress;
//# sourceMappingURL=deliver-address.entity.js.map