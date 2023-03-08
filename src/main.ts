import { HttpExceptionFilter } from './common/exceptions/http-exception.filter';
import { ResponseInterceptor } from './common/interceptors/response.interceptor';
import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import * as cookieParser from 'cookie-parser';
import * as fs from 'fs';

async function bootstrap() {
  const httpsOptions =
    process.env.MODE === 'prod'
      ? {
          key: fs.readFileSync('/home/ubuntu/privkey.pem'),
          cert: fs.readFileSync('/home/ubuntu/fullchain.pem'),
        }
      : null;

  const app = await NestFactory.create(AppModule, {
    cors: {
      origin: [
        'http://localhost:3000',
        'http://127.0.0.1:3000',
        'https://seowasil.s3.ap-northeast-2.amazonaws.com',
        'https://seowasil.s3.ap-northeast-2.amazonaws.com/index.html',
        'https://seowasil.shop',
        'https://dtpju7c5zwxr0.cloudfront.net',
      ],
      credentials: true,
    },
    httpsOptions,
  });
  app.setGlobalPrefix('/api');

  // HttpException Filter
  app.useGlobalFilters(new HttpExceptionFilter());

  // Response Interceptor
  app.useGlobalInterceptors(new ResponseInterceptor());

  // class-validation
  app.useGlobalPipes(
    new ValidationPipe({ transform: true, forbidUnknownValues: false }),
  );

  app.use(cookieParser());

  // Swagger
  SwaggerModule.setup(
    '/docs',
    app,
    SwaggerModule.createDocument(
      app,
      new DocumentBuilder()
        .setTitle('서와실 농원 API')
        .setDescription('Writed by Gyomdyung')
        .setVersion('1.0')
        .build(),
    ),
  );

  await app.listen(+process.env.PORT);
}
bootstrap();
