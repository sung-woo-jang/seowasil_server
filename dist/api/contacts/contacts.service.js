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
exports.ContactsService = void 0;
const contacts_repository_1 = require("./contacts.repository");
const typeorm_1 = require("@nestjs/typeorm");
const common_1 = require("@nestjs/common");
const contact_entity_1 = require("./entities/contact.entity");
let ContactsService = class ContactsService {
    constructor(contactsRepository) {
        this.contactsRepository = contactsRepository;
    }
    async createContact(createContactDto) {
        const result = await this.contactsRepository.save(Object.assign({}, createContactDto));
        return result;
    }
    async getContactList() {
        const result = await this.contactsRepository
            .createQueryBuilder('contact')
            .select([
            'contact.id',
            'contact.title',
            'contact.name',
            'contact.category',
        ])
            .getMany();
        return result;
    }
    async getContact(id, password) {
        const result = await this.contactsRepository.findOne({ id });
        if (result.password !== password)
            throw new Error('비밀번호가 맞지 않습니다.');
        return result;
    }
    async updateContact(updateContactDto, id) {
        const result = await this.contactsRepository
            .createQueryBuilder('contact')
            .update(contact_entity_1.Contact)
            .set(Object.assign({}, updateContactDto))
            .where('id = :id', { id })
            .execute();
        return result;
    }
    async deleteContact(id) {
        return await this.contactsRepository.softDelete(id);
    }
};
ContactsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(contacts_repository_1.ContactsRepository)),
    __metadata("design:paramtypes", [contacts_repository_1.ContactsRepository])
], ContactsService);
exports.ContactsService = ContactsService;
//# sourceMappingURL=contacts.service.js.map