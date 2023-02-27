"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateContactDto = void 0;
const contact_entity_1 = require("./../entities/contact.entity");
const swagger_1 = require("@nestjs/swagger");
class CreateContactDto extends (0, swagger_1.PickType)(contact_entity_1.Contact, [
    'title',
    'description',
    'name',
    'password',
    'category',
]) {
}
exports.CreateContactDto = CreateContactDto;
//# sourceMappingURL=create-contact.dto.js.map