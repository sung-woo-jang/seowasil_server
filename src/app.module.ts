import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import * as Joi from 'joi';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmAsyncModuleOptions } from './config/typeorm.config';
import { UsersModule } from './api/users/users.module';
import { APP_GUARD } from '@nestjs/core';
import { JwtAuthGuard } from './auth/guards/jwt-auth.guard';
import { CartsModule } from './api/carts/carts.module';
import { CategoriesModule } from './api/categories/categories.module';
import { CommentsModule } from './api/comments/comments.module';
import { ContactsModule } from './api/contacts/contacts.module';
import { DeliverAddressModule } from './api/deliver-address/deliver-address.module';
import { NoticesModule } from './api/notices/notices.module';
import { OrdersModule } from './api/orders/orders.module';
import { ProductDetailImagesModule } from './api/product-detail-images/product-detail-images.module';
import { ProductImagesModule } from './api/product-images/product-images.module';
import { ProductsModule } from './api/products/products.module';

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
      }),
    }),
    TypeOrmModule.forRootAsync(typeOrmAsyncModuleOptions),
    AuthModule,
    UsersModule,
    CartsModule,
    CategoriesModule,
    CommentsModule,
    ContactsModule,
    DeliverAddressModule,
    NoticesModule,
    OrdersModule,
    ProductDetailImagesModule,
    ProductImagesModule,
    ProductsModule,
  ],
  providers: [
    // 전역 가드
    { provide: APP_GUARD, useClass: JwtAuthGuard },
  ],
})
export class AppModule {}
