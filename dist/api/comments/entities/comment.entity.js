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
exports.Comment = void 0;
const common_entity_1 = require("../../../common/entities/common.entity");
const typeorm_1 = require("typeorm");
let Comment = class Comment extends common_entity_1.CommonEntity {
};
__decorate([
    (0, typeorm_1.Column)({
        type: 'varchar',
        comment: '작성지',
        nullable: false,
        default: '서와실 농원',
    }),
    __metadata("design:type", String)
], Comment.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', comment: '답글', nullable: false }),
    __metadata("design:type", String)
], Comment.prototype, "comment", void 0);
Comment = __decorate([
    (0, typeorm_1.Entity)()
], Comment);
exports.Comment = Comment;
//# sourceMappingURL=comment.entity.js.map