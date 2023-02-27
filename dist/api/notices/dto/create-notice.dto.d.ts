import { Notice } from '../entities/notice.entity';
declare const CreateNoticeDto_base: import("@nestjs/common").Type<Pick<Notice, "description" | "title">>;
export declare class CreateNoticeDto extends CreateNoticeDto_base {
}
export {};
