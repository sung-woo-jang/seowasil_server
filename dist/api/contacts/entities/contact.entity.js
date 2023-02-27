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
exports.Contact = void 0;
const comment_entity_1 = require("../../comments/entities/comment.entity");
const common_entity_1 = require("../../../common/entities/common.entity");
const typeorm_1 = require("typeorm");
let Contact = class Contact extends common_entity_1.CommonEntity {
};
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', comment: '문의 제목', nullable: false }),
    __metadata("design:type", String)
], Contact.prototype, "title", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', comment: '문의 내용', nullable: false }),
    __metadata("design:type", String)
], Contact.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', comment: '글쓴이', nullable: false }),
    __metadata("design:type", String)
], Contact.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', comment: '문의글 비밀번호', nullable: false }),
    __metadata("design:type", String)
], Contact.prototype, "password", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'varchar',
        comment: '문의 카테고리',
        nullable: false,
        default: '기타',
    }),
    __metadata("design:type", String)
], Contact.prototype, "category", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => comment_entity_1.Comment),
    (0, typeorm_1.JoinColumn)({ name: 'comment_id', referencedColumnName: 'id' }),
    __metadata("design:type", comment_entity_1.Comment)
], Contact.prototype, "comment", void 0);
Contact = __decorate([
    (0, typeorm_1.Entity)()
], Contact);
exports.Contact = Contact;
//# sourceMappingURL=contact.entity.js.map