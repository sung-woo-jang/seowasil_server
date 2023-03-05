"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const jwt_auth_guard_1 = require("./api/auth/guards/jwt-auth.guard");
const logger_middleware_1 = require("./common/middleware/logger.middleware");
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const typeorm_1 = require("@nestjs/typeorm");
const Joi = require("joi");
const typeorm_config_1 = require("./config/typeorm.config");
const users_module_1 = require("./api/users/users.module");
const orders_module_1 = require("./api/orders/orders.module");
const deliver_address_module_1 = require("./api/deliver-address/deliver-address.module");
const order_details_module_1 = require("./api/order-details/order-details.module");
const products_module_1 = require("./api/products/products.module");
const product_images_module_1 = require("./api/product-images/product-images.module");
const product_thumbnail_module_1 = require("./api/product-thumbnail/product-thumbnail.module");
const categories_module_1 = require("./api/categories/categories.module");
const notices_module_1 = require("./api/notices/notices.module");
const carts_module_1 = require("./api/carts/carts.module");
const contacts_module_1 = require("./api/contacts/contacts.module");
const comments_module_1 = require("./api/comments/comments.module");
const auth_module_1 = require("./api/auth/auth.module");
const core_1 = require("@nestjs/core");
const images_module_1 = require("./api/images/images.module");
const s3_module_1 = require("./api/s3/s3.module");
let AppModule = class AppModule {
    configure(consumer) {
        consumer.apply(logger_middleware_1.LoggerMiddleware).forRoutes('*');
    }
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
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
                }),
            }),
            typeorm_1.TypeOrmModule.forRootAsync(typeorm_config_1.typeOrmAsyncModuleOptions),
            users_module_1.UsersModule,
            orders_module_1.OrdersModule,
            deliver_address_module_1.DeliverAddressModule,
            order_details_module_1.OrderDetailsModule,
            products_module_1.ProductsModule,
            product_images_module_1.ProductImagesModule,
            product_thumbnail_module_1.ProductThumbnailModule,
            categories_module_1.CategoriesModule,
            notices_module_1.NoticesModule,
            carts_module_1.CartsModule,
            contacts_module_1.ContactsModule,
            comments_module_1.CommentsModule,
            auth_module_1.AuthModule,
            images_module_1.ImagesModule,
            s3_module_1.S3Module,
        ],
        providers: [{ provide: core_1.APP_GUARD, useClass: jwt_auth_guard_1.JwtAuthGuard }],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map