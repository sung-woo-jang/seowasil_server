import { CreateDeliverAddressDto } from './dto/create-deliver-address.dto';
import { DeliverAddressRepository } from './deliver-address.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';
import { UsersRepository } from '../users/users.repository';

@Injectable()
export class DeliverAddressService {
  constructor(
    @InjectRepository(DeliverAddressRepository)
    private deliverAddressRepository: DeliverAddressRepository,
    @InjectRepository(UsersRepository)
    private usersRepository: UsersRepository,
  ) {}
  async createAddress(createDeliverAddressDto: CreateDeliverAddressDto) {
    const { user_id } = createDeliverAddressDto;
    const user = await this.usersRepository.getById(user_id);
    return await this.deliverAddressRepository.createAddress(
      createDeliverAddressDto,
      user,
    );
  }
}
