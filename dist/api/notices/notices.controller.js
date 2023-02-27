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
exports.NoticesController = void 0;
const update_notice_dto_1 = require("./dto/update-notice.dto");
const create_notice_dto_1 = require("./dto/create-notice.dto");
const common_1 = require("@nestjs/common");
const notices_service_1 = require("./notices.service");
let NoticesController = class NoticesController {
    constructor(noticesService) {
        this.noticesService = noticesService;
    }
    createNotice(createNoticeDto) {
        return this.noticesService.createNotice(createNoticeDto);
    }
    getNoticeList() {
        return this.noticesService.getNoticeList();
    }
    getNotice(id) {
        return this.noticesService.getNotice(id);
    }
    updateNotice(updateNoticeDto, id) {
        return this.noticesService.updateNotice(updateNoticeDto, id);
    }
    deleteNotice(id) {
        return this.noticesService.deleteNotice(id);
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_notice_dto_1.CreateNoticeDto]),
    __metadata("design:returntype", void 0)
], NoticesController.prototype, "createNotice", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], NoticesController.prototype, "getNoticeList", null);
__decorate([
    (0, common_1.Get)('/:id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], NoticesController.prototype, "getNotice", null);
__decorate([
    (0, common_1.Patch)('/:id'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_notice_dto_1.UpdateNoticeDto, Number]),
    __metadata("design:returntype", void 0)
], NoticesController.prototype, "updateNotice", null);
__decorate([
    (0, common_1.Delete)('/:id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], NoticesController.prototype, "deleteNotice", null);
NoticesController = __decorate([
    (0, common_1.Controller)('notices'),
    __metadata("design:paramtypes", [notices_service_1.NoticesService])
], NoticesController);
exports.NoticesController = NoticesController;
//# sourceMappingURL=notices.controller.js.map