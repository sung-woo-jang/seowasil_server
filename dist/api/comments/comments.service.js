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
exports.CommentsService = void 0;
const comments_repository_1 = require("./comments.repository");
const typeorm_1 = require("@nestjs/typeorm");
const common_1 = require("@nestjs/common");
const comment_entity_1 = require("./entities/comment.entity");
let CommentsService = class CommentsService {
    constructor(commentsRepository) {
        this.commentsRepository = commentsRepository;
    }
    async createComment(createCommentDto) {
        const result = await this.commentsRepository.save(Object.assign({}, createCommentDto));
        return result;
    }
    async getCommentList() {
        const result = await this.commentsRepository.find();
        return result;
    }
    async getComment(id) {
        const result = await this.commentsRepository.findOne({ id });
        return result;
    }
    async updateComment(updateCommentDto, id) {
        const result = await this.commentsRepository
            .createQueryBuilder('comment')
            .update(comment_entity_1.Comment)
            .set(Object.assign({}, updateCommentDto))
            .where('id = :id', { id })
            .execute();
        return result;
    }
    async deleteComment(id) {
        return await this.commentsRepository.delete(id);
    }
};
CommentsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(comments_repository_1.CommentsRepository)),
    __metadata("design:paramtypes", [comments_repository_1.CommentsRepository])
], CommentsService);
exports.CommentsService = CommentsService;
//# sourceMappingURL=comments.service.js.map