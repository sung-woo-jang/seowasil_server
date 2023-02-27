import { Contact } from './../entities/contact.entity';
declare const CreateContactDto_base: import("@nestjs/common").Type<Pick<Contact, "name" | "password" | "description" | "title" | "category">>;
export declare class CreateContactDto extends CreateContactDto_base {
}
export {};
