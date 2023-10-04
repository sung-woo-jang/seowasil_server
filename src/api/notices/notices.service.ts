import { Injectable } from '@nestjs/common';
import { CreateNoticeDto } from './dto/create-notice.dto';
import { UpdateNoticeDto } from './dto/update-notice.dto';
import { NoticesRepository } from './notices.repository';

@Injectable()
export class NoticesService {
  constructor(private noticesRepository: NoticesRepository) {}
  createNotices(createNoticeDto: CreateNoticeDto) {
    return this.noticesRepository.createNotices(createNoticeDto);
  }
  getNotices() {
    return this.noticesRepository.getNotices();
  }
  getNoticeDetail(id: number) {
    return this.noticesRepository.getNoticeDetail(id);
  }
  patchNotice(id: number) {
    return this.noticesRepository.patchNotice(id);
  }
  deleteNotice(id: number) {
    return this.noticesRepository.deleteNotice(id);
  }
}
