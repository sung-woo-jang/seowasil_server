import { Repository } from 'typeorm';
import { HttpException, HttpStatus } from '@nestjs/common';
import { Notice } from './entities/notice.entity';
import { CreateNoticeDto } from './dto/create-notice.dto';
import { CustomRepository } from 'src/database/repository/repository.decorator';

@CustomRepository(Notice)
export class NoticesRepository extends Repository<Notice> {
  async createNotices(createNoticeDto: CreateNoticeDto) {
    return await this.save(createNoticeDto);
  }
  async getNotices() {
    return await this.find();
  }
  async getNoticeDetail(id: number) {
    return await this.find({
      where: { id },
    });
  }
  async patchNotice(id: number) {
    throw new HttpException(
      `Method not implemented. ${id}`,
      HttpStatus.BAD_REQUEST,
    );
  }
  async deleteNotice(id: number) {
    return await this.createQueryBuilder('notice')
      .softDelete()
      .where('id =:id', { id })
      .execute();
  }
}
