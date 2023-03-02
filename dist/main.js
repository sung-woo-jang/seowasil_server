"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const http_exception_filter_1 = require("./common/exceptions/http-exception.filter");
const response_interceptor_1 = require("./common/interceptors/response.interceptor");
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const swagger_1 = require("@nestjs/swagger");
const cookieParser = require("cookie-parser");
const fs = require("fs");
async function bootstrap() {
    const httpsOptions = process.env.MODE === 'prod'
        ? {
            key: fs.readFileSync('/home/ubuntu/privkey.pem'),
            cert: fs.readFileSync('/home/ubuntu/fullchain.pem'),
        }
        : null;
    const app = await core_1.NestFactory.create(app_module_1.AppModule, {
        cors: {
            origin: [
                'http://localhost:3000',
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
    app.useGlobalFilters(new http_exception_filter_1.HttpExceptionFilter());
    app.useGlobalInterceptors(new response_interceptor_1.ResponseInterceptor());
    app.useGlobalPipes(new common_1.ValidationPipe({ transform: true, forbidUnknownValues: false }));
    app.use(cookieParser());
    swagger_1.SwaggerModule.setup('/docs', app, swagger_1.SwaggerModule.createDocument(app, new swagger_1.DocumentBuilder()
        .setTitle('서와실 농원 API')
        .setDescription('Writed by Gyomdyung')
        .setVersion('1.0')
        .build()));
    await app.listen(+process.env.PORT);
}
bootstrap();
//# sourceMappingURL=main.js.map