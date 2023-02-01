import { Injectable } from '@nestjs/common';
import { CreateDeliverAddressDto } from './dto/create-deliver-address.dto';
import { UpdateDeliverAddressDto } from './dto/update-deliver-address.dto';

@Injectable()
export class DeliverAddressService {
  create(createDeliverAddressDto: CreateDeliverAddressDto) {
    return 'This action adds a new deliverAddress';
  }

  findAll() {
    return `This action returns all deliverAddress`;
  }

  findOne(id: number) {
    return `This action returns a #${id} deliverAddress`;
  }

  update(id: number, updateDeliverAddressDto: UpdateDeliverAddressDto) {
    return `This action updates a #${id} deliverAddress`;
  }

  remove(id: number) {
    return `This action removes a #${id} deliverAddress`;
  }
}
