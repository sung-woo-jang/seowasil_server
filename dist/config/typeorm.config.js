"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.typeOrmAsyncModuleOptions = void 0;
const typeorm_naming_strategies_1 = require("typeorm-naming-strategies");
exports.typeOrmAsyncModuleOptions = {
    useFactory: async () => ({
        namingStrategy: new typeorm_naming_strategies_1.SnakeNamingStrategy(),
        type: 'postgres',
        host: process.env.HOST,
        port: 5432,
        username: process.env.USERNAME,
        password: process.env.PASSWORD,
        database: process.env.DATABASE,
        entities: [__dirname + '/../**/*.entity.{js,ts}'],
        synchronize: true,
    }),
};
//# sourceMappingURL=typeorm.config.js.map