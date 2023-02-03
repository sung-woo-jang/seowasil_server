import { Notice } from './entities/notice.entity';
import { EntityRepository, Repository } from 'typeorm';

@EntityRepository(Notice)
export class NoticesRepository extends Repository<Notice> {}
