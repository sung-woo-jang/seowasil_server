import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';
import { CartsRepository } from './carts.repository';

@Injectable()
export class CartsService {
  constructor(
    @InjectRepository(CartsRepository) private cartsRepository: CartsRepository,
  ) {}
}
