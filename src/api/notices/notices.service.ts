import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';
import { NoticesRepository } from './notices.repository';
import { Notice } from './entities/notice.entity';
import { UpdateNoticeDto } from './dto/update-notice.dto';
import { CreateNoticeDto } from './dto/create-notice.dto';

@Injectable()
export class NoticesService {
  constructor(
    @InjectRepository(NoticesRepository)
    private noticesRepository: NoticesRepository,
  ) {}

  async createNotice(createNoticeDto: CreateNoticeDto) {
    const result = await this.noticesRepository.save({
      ...createNoticeDto,
    });
    return result;
  }

  async getNoticeList() {
    const result = await this.noticesRepository.find();
    return result;
  }

  async getNotice(id: number) {
    const result = await this.noticesRepository.findOne({ id });

    return result;
  }

  async updateNotice(updateNoticeDto: UpdateNoticeDto, id: number) {
    const result = await this.noticesRepository
      .createQueryBuilder('notice')
      .update(Notice)
      .set({ ...updateNoticeDto })
      .where('id = :id', { id })
      .execute();
    return result;
  }

  async deleteNotice(id: number) {
    return await this.noticesRepository.softDelete(id);
  }
}
