import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

import * as dotenv from 'dotenv';
import { setNestApp } from './setNestApp';
import { setSwagger } from './setSwagger';

dotenv.config();

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  setNestApp(app);
  setSwagger(app);

  await app.listen(+process.env.PORT);
}
bootstrap();
