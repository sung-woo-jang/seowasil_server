import { ClassSerializerInterceptor, Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import * as Joi from 'joi';
import { UsersModule } from './api/users/users.module';
import { APP_GUARD, APP_INTERCEPTOR } from '@nestjs/core';
import { JwtAuthGuard } from './auth/guards/jwt-auth.guard';
import { CartsModule } from './api/carts/carts.module';
import { CategoriesModule } from './api/categories/categories.module';
import { CommentsModule } from './api/comments/comments.module';
import { ContactsModule } from './api/contacts/contacts.module';
import { DeliverAddressModule } from './api/deliver-address/deliver-address.module';
import { NoticesModule } from './api/notices/notices.module';
import { OrdersModule } from './api/orders/orders.module';
import { ProductsModule } from './api/products/products.module';
import { ContactCategoryModule } from './api/contact-category/contact-category.module';
import { DatabaseModule } from './database/database.module';
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
      }),
    }),
    // TypeOrmModule.forRootAsync(typeOrmAsyncModuleOptions),
    AuthModule,
    UsersModule,
    CartsModule,
    CategoriesModule,
    CommentsModule,
    ContactsModule,
    DeliverAddressModule,
    NoticesModule,
    OrdersModule,
    ProductsModule,
    ContactCategoryModule,
    DatabaseModule,
  ],
  providers: [
    // 전역 가드
    { provide: APP_GUARD, useClass: JwtAuthGuard },
    {
      provide: APP_GUARD,
      useClass: RolesGuard,
    },
    {
      provide: APP_INTERCEPTOR,
      useClass: ClassSerializerInterceptor,
    },
  ],
})
export class AppModule {}
