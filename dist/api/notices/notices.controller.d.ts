import { UpdateNoticeDto } from './dto/update-notice.dto';
import { CreateNoticeDto } from './dto/create-notice.dto';
import { NoticesService } from './notices.service';
export declare class NoticesController {
    private readonly noticesService;
    constructor(noticesService: NoticesService);
    createNotice(createNoticeDto: CreateNoticeDto): Promise<{
        title: string;
        description: string;
    } & import("./entities/notice.entity").Notice>;
    getNoticeList(): Promise<import("./entities/notice.entity").Notice[]>;
    getNotice(id: number): Promise<import("./entities/notice.entity").Notice>;
    updateNotice(updateNoticeDto: UpdateNoticeDto, id: number): Promise<import("typeorm").UpdateResult>;
    deleteNotice(id: number): Promise<import("typeorm").DeleteResult>;
}
