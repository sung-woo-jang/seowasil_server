"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderDetailsModule = void 0;
const order_details_repository_1 = require("./order-details.repository");
const typeorm_1 = require("@nestjs/typeorm");
const common_1 = require("@nestjs/common");
let OrderDetailsModule = class OrderDetailsModule {
};
OrderDetailsModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([order_details_repository_1.OrderDetailsRepository])],
    })
], OrderDetailsModule);
exports.OrderDetailsModule = OrderDetailsModule;
//# sourceMappingURL=order-details.module.js.map