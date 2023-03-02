import { Notice } from '../entities/notice.entity';
declare const CreateNoticeDto_base: import("@nestjs/common").Type<Pick<Notice, "title" | "description">>;
export declare class CreateNoticeDto extends CreateNoticeDto_base {
}
export {};
