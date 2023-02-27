import { NoticesRepository } from './notices.repository';
import { Notice } from './entities/notice.entity';
import { UpdateNoticeDto } from './dto/update-notice.dto';
import { CreateNoticeDto } from './dto/create-notice.dto';
export declare class NoticesService {
    private noticesRepository;
    constructor(noticesRepository: NoticesRepository);
    createNotice(createNoticeDto: CreateNoticeDto): Promise<{
        description: string;
        title: string;
    } & Notice>;
    getNoticeList(): Promise<Notice[]>;
    getNotice(id: number): Promise<Notice>;
    updateNotice(updateNoticeDto: UpdateNoticeDto, id: number): Promise<import("typeorm").UpdateResult>;
    deleteNotice(id: number): Promise<import("typeorm").UpdateResult>;
}
