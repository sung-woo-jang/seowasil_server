import { JwtAuthGuard } from './auth/guards/jwt-auth.guard';
import { LoggerMiddleware } from './common/middleware/logger.middleware';
import { MiddlewareConsumer, Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import * as Joi from 'joi';
import { typeOrmAsyncModuleOptions } from './config/typeorm.config';
import { UsersModule } from './api/users/users.module';
import { OrdersModule } from './api/orders/orders.module';
import { DeliverAddressModule } from './api/deliver-address/deliver-address.module';
import { ProductsModule } from './api/products/products.module';
import { ProductImagesModule } from './api/product-images/product-images.module';
import { ProductDetailImagesModule } from './api/product-detail-images/product-detail-images.module';
import { CategoriesModule } from './api/categories/categories.module';
import { NoticesModule } from './api/notices/notices.module';
import { CartsModule } from './api/carts/carts.module';
import { ContactsModule } from './api/contacts/contacts.module';
import { CommentsModule } from './api/comments/comments.module';
import { AuthModule } from './auth/auth.module';
import { APP_GUARD } from '@nestjs/core';
import { S3Module } from './s3/s3.module';
import { SmsModule } from './sms/sms.module';
import { RolesGuard } from './auth/guards/role.guard';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true,
      validationSchema: Joi.object({
        MODE: Joi.string().valid('dev', 'prod').required(),
        PORT: Joi.number().default(8000),
        USERNAME: Joi.string().required(),
        PASSWORD: Joi.string().required(),
        DATABASE: Joi.string().required(),
        HOST: Joi.string().required(),
        JWT_SECRET_KEY: Joi.string().required(),
        JWT_EXPIRESIN: Joi.number().required(),
        JWT_REFRESH_TOKEN_SECRET: Joi.string().required(),
        JWT_REFRESH_TOKEN_EXPIRATION_TIME: Joi.number().required(),
        AWS_ACCESS_KEY: Joi.string().required(),
        AWS_SECRET_KEY: Joi.string().required(),
        AWS_S3_BUCKET_NAME: Joi.string().required(),
        NCP_SENS_ACCESS_KEY: Joi.string().required(),
        NCP_SENS_SECRET_KEY: Joi.string().required(),
        NCP_SENS_ID: Joi.string().required(),
        NCP_SENS_URI: Joi.string().required(),
      }),
    }),
    TypeOrmModule.forRootAsync(typeOrmAsyncModuleOptions),
    UsersModule,
    OrdersModule,
    DeliverAddressModule,
    ProductsModule,
    ProductImagesModule,
    ProductDetailImagesModule,
    CategoriesModule,
    NoticesModule,
    CartsModule,
    ContactsModule,
    CommentsModule,
    AuthModule,
    S3Module,
    SmsModule,
  ],
  providers: [
    { provide: APP_GUARD, useClass: JwtAuthGuard },
    {
      provide: APP_GUARD,
      useClass: RolesGuard,
    },
  ],
})
export class AppModule {
  // log middleware 적용
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('*');
  }
}
