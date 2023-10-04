import { Injectable } from '@nestjs/common';
import { DeliverAddressRepository } from './deliver-address.repository';

@Injectable()
export class DeliverAddressService {
  constructor(
    private readonly deliverAddressRepository: DeliverAddressRepository,
  ) {}
}
