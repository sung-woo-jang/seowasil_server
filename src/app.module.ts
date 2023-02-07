import { JwtAuthGuard } from './api/auth/guards/jwt-auth.guard';
import { LoggerMiddleware } from './common/middleware/logger.middleware';
import { MiddlewareConsumer, Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import * as Joi from 'joi';
import { typeOrmAsyncModuleOptions } from './config/typeorm.config';
import { UsersModule } from './api/users/users.module';
import { OrdersModule } from './api/orders/orders.module';
import { DeliverAddressModule } from './api/deliver-address/deliver-address.module';
import { OrderDetailsModule } from './api/order-details/order-details.module';
import { ProductsModule } from './api/products/products.module';
import { ProductImagesModule } from './api/product-images/product-images.module';
import { ProductThumbnailModule } from './api/product-thumbnail/product-thumbnail.module';
import { CategoriesModule } from './api/categories/categories.module';
import { NoticesModule } from './api/notices/notices.module';
import { CartsModule } from './api/carts/carts.module';
import { ContactsModule } from './api/contacts/contacts.module';
import { CommentsModule } from './api/comments/comments.module';
import { AuthModule } from './api/auth/auth.module';
import { APP_GUARD } from '@nestjs/core';

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
        JWT_SECRET_KEY: Joi.string().required(),
        JWT_EXPIRESIN: Joi.number().required(),
        JWT_REFRESH_TOKEN_SECRET: Joi.string().required(),
        JWT_REFRESH_TOKEN_EXPIRATION_TIME: Joi.number().required(),
        AWS_ACCESS_KEY: Joi.string().required(),
        AWS_SECRET_KEY: Joi.string().required(),
        AWS_S3_BUCKET_NAME: Joi.string().required(),
      }),
    }),
    TypeOrmModule.forRootAsync(typeOrmAsyncModuleOptions),
    UsersModule,
    OrdersModule,
    DeliverAddressModule,
    OrderDetailsModule,
    ProductsModule,
    ProductImagesModule,
    ProductThumbnailModule,
    CategoriesModule,
    NoticesModule,
    CartsModule,
    ContactsModule,
    CommentsModule,
    AuthModule,
  ],
  providers: [{ provide: APP_GUARD, useClass: JwtAuthGuard }],
})
export class AppModule {
  // log middleware 적용
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('*');
  }
}
