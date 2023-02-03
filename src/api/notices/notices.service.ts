import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';
import { NoticesRepository } from './notices.repository';

@Injectable()
export class NoticesService {
  constructor(
    @InjectRepository(NoticesRepository)
    private noticesRepository: NoticesRepository,
  ) {}
}
