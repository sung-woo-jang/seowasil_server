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
exports.Notice = void 0;
const typeorm_1 = require("typeorm");
const common_entity_1 = require("../../../common/entities/common.entity");
let Notice = class Notice extends common_entity_1.CommonEntity {
};
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', comment: '공지 제목', nullable: false }),
    __metadata("design:type", String)
], Notice.prototype, "title", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', comment: '공지 내용', nullable: false }),
    __metadata("design:type", String)
], Notice.prototype, "description", void 0);
Notice = __decorate([
    (0, typeorm_1.Entity)()
], Notice);
exports.Notice = Notice;
//# sourceMappingURL=notice.entity.js.map