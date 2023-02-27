"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateNoticeDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const notice_entity_1 = require("../entities/notice.entity");
class CreateNoticeDto extends (0, swagger_1.PickType)(notice_entity_1.Notice, [
    'title',
    'description',
]) {
}
exports.CreateNoticeDto = CreateNoticeDto;
//# sourceMappingURL=create-notice.dto.js.map