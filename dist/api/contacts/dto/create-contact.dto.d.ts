import { Contact } from './../entities/contact.entity';
declare const CreateContactDto_base: import("@nestjs/common").Type<Pick<Contact, "title" | "description" | "name" | "password" | "category">>;
export declare class CreateContactDto extends CreateContactDto_base {
}
export {};
