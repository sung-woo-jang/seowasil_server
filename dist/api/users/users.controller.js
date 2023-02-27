"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersController = void 0;
const jwt_refresh_guard_1 = require("./../auth/guards/jwt-refresh.guard");
const auth_service_1 = require("./../auth/auth.service");
const local_auth_guard_1 = require("./../auth/guards/local-auth.guard");
const common_1 = require("@nestjs/common");
const users_service_1 = require("./users.service");
const create_user_dto_1 = require("./dto/create-user.dto");
const skip_auth_decorator_1 = require("../../common/decorators/skip-auth.decorator");
let UsersController = class UsersController {
    constructor(usersService, authService) {
        this.usersService = usersService;
        this.authService = authService;
    }
    signUp(createUserDto) {
        return this.usersService.signUp(createUserDto);
    }
    async signIn(req, res) {
        const { user } = req;
        const _a = this.authService.getCookieWithJwtAccessToken(user), { accessToken } = _a, accessOption = __rest(_a, ["accessToken"]);
        const _b = this.authService.getCookieWithJwtRefreshToken(user.id), { refreshToken } = _b, refreshOption = __rest(_b, ["refreshToken"]);
        await this.usersService.setCurrentRefreshToken(refreshToken, user.id);
        res.cookie('AccessToken', accessToken, accessOption);
        res.cookie('RefreshToken', refreshToken, refreshOption);
        return { accessToken, refreshToken, user };
    }
    async logOut(req, res) {
        const { accessOption, refreshOption } = this.authService.getCookiesForLogOut();
        await this.usersService.removeRefreshToken(req.user.id);
        res.cookie('AccessToken', '', accessOption);
        res.cookie('RefreshToken', '', refreshOption);
    }
    getCookies(req, res) {
        const jwt = req.cookies['AccessToken'];
        return res.send(jwt);
    }
    refresh(req, res) {
        const user = req.user;
        const _a = this.authService.getCookieWithJwtAccessToken(user.id), { accessToken } = _a, accessOption = __rest(_a, ["accessToken"]);
        res.cookie('AccessToken', accessToken, accessOption);
        return user;
    }
};
__decorate([
    (0, skip_auth_decorator_1.Public)(),
    (0, common_1.Post)('/signup'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_user_dto_1.CreateUserDto]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "signUp", null);
__decorate([
    (0, skip_auth_decorator_1.Public)(),
    (0, common_1.UseGuards)(local_auth_guard_1.LocalAuthGuard),
    (0, common_1.Post)('/signin'),
    __param(0, (0, common_1.Request)()),
    __param(1, (0, common_1.Res)({ passthrough: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "signIn", null);
__decorate([
    (0, skip_auth_decorator_1.Public)(),
    (0, common_1.UseGuards)(jwt_refresh_guard_1.JwtRefreshGuard),
    (0, common_1.Post)('logout'),
    __param(0, (0, common_1.Request)()),
    __param(1, (0, common_1.Res)({ passthrough: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "logOut", null);
__decorate([
    (0, common_1.Get)('/cookies'),
    __param(0, (0, common_1.Request)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Object)
], UsersController.prototype, "getCookies", null);
__decorate([
    (0, skip_auth_decorator_1.Public)(),
    (0, common_1.UseGuards)(jwt_refresh_guard_1.JwtRefreshGuard),
    (0, common_1.Get)('refresh'),
    __param(0, (0, common_1.Request)()),
    __param(1, (0, common_1.Res)({ passthrough: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "refresh", null);
UsersController = __decorate([
    (0, common_1.Controller)('users'),
    __metadata("design:paramtypes", [users_service_1.UsersService,
        auth_service_1.AuthService])
], UsersController);
exports.UsersController = UsersController;
//# sourceMappingURL=users.controller.js.map