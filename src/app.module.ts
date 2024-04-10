import { ClassSerializerInterceptor, Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './api/users/users.module';
import { APP_GUARD, APP_INTERCEPTOR } from '@nestjs/core';
import { JwtAuthGuard } from './auth/guards/jwt-auth.guard';
import { CategoriesModule } from './api/categories/categories.module';
import { ProductsModule } from './api/products/products.module';
import { DatabaseModule } from './database/database.module';
import { RolesGuard } from './auth/guards/role.guard';
import { SseModule } from './sse/sse.module';
import { AppConfigModule } from './config/appConfig.module';

@Module({
  imports: [
    AppConfigModule,
    AuthModule,
    UsersModule,
    CategoriesModule,
    ProductsModule,
    DatabaseModule,
    SseModule,
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
