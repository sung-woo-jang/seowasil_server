import { DeliverAddressRepository } from './deliver-address.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';

@Injectable()
export class DeliverAddressService {
  constructor(
    @InjectRepository(DeliverAddressRepository)
    private deliverAddressRepository: DeliverAddressRepository,
  ) {}
}
