import { User } from '@app/users/entities/user.entity';
import { DataSource } from 'typeorm';
import { Seeder } from 'typeorm-extension';
import * as bcrypt from 'bcryptjs';

export default class UsersSeeder implements Seeder {
  async run(dataSource: DataSource): Promise<any> {
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
  }
}
