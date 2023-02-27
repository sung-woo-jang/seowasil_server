import { TypeOrmModuleOptions } from '@nestjs/typeorm';
export declare const typeOrmAsyncModuleOptions: {
    useFactory: () => Promise<TypeOrmModuleOptions>;
};
