import { DeliverAddress } from '@app/deliver-address/entities/deliver-address.entity';
import { User } from '@app/users/entities/user.entity';
import { DataSource } from 'typeorm';
import { Seeder } from 'typeorm-extension';
import * as bcrypt from 'bcryptjs';

export default class UsersSeeder implements Seeder {
  async run(dataSource: DataSource): Promise<any> {
    /* 
    const user = await this.dataSource.transaction(async (manager) => {
      const user = await manager
        .withRepository(this.userRepository)
        .createUser({ ...createUserDto, password: hashedPassword });
      await manager
        .withRepository(this.deliverAddressRepository)
        .save({ zoneCode, roadAddress, detailAddress, user });

      return user;
    });
*/

    /* 
{
  "account":"{{account}}",
  "username":"장성우",
  "phoneNumber":"010-7637-0624",
  "password":"{{password}}",
  "zoneCode":"22021",
  "roadAddress":"인천 미추홀구 우리푸름빌",
  "detailAddress":"402호"
}
*/
    const hashedPassword = await bcrypt.hash(
      'admin#12',
      await bcrypt.genSalt(),
    );
    const userRepository = await dataSource.getRepository(User);

    const user = await userRepository.findOne({
      where: {
        account: 'admin',
      },
    });

    if (user) {
      await userRepository
        .createQueryBuilder('user')
        .where('id = :id', { id: user.id })
        .delete()
        .execute();
    }

    await userRepository.insert([
      {
        account: 'admin',
        password: hashedPassword,
        username: '장성우',
        phoneNumber: '010-7637-0624',
      },
    ]);
    const deliverAddressRepository = dataSource.getRepository(DeliverAddress);
    await deliverAddressRepository.insert([
      {
        zoneCode: '22021',
        roadAddress: '인천 미추홀구 우리푸름빌',
        detailAddress: '402호',
      },
    ]);
  }
}
