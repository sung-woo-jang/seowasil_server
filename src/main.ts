import { HttpExceptionFilter } from './common/exceptions/http-exception.filter';
import { ResponseInterceptor } from './common/interceptors/response.interceptor';
import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.setGlobalPrefix('/api');

  // HttpException Filter
  app.useGlobalFilters(new HttpExceptionFilter());

  // Response Interceptor
  app.useGlobalInterceptors(new ResponseInterceptor());

  // class-validation
  app.useGlobalPipes(new ValidationPipe({ transform: true }));

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

  await app.listen(process.env.PORT);
}
bootstrap();
