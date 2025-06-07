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
Object.defineProperty(exports, "__esModule", { value: true });
exports.KeranjangUsersController = void 0;
const common_1 = require("@nestjs/common");
const keranjang_users_service_1 = require("./keranjang-users.service");
let KeranjangUsersController = class KeranjangUsersController {
    keranjangUsersService;
    constructor(keranjangUsersService) {
        this.keranjangUsersService = keranjangUsersService;
    }
    getByUser(userId) {
        return this.keranjangUsersService.findAllByUser(userId);
    }
    create(body) {
        return this.keranjangUsersService.create(body);
    }
    findAll() {
        return this.keranjangUsersService.findAll();
    }
    findOne(id) {
        return this.keranjangUsersService.findOne(id);
    }
    update(id, body) {
        return this.keranjangUsersService.update(id, body);
    }
    remove(id) {
        return this.keranjangUsersService.remove(id);
    }
    clear() {
        return this.keranjangUsersService.clearData();
    }
};
exports.KeranjangUsersController = KeranjangUsersController;
__decorate([
    (0, common_1.Get)('user/:userId'),
    __param(0, (0, common_1.Param)('userId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], KeranjangUsersController.prototype, "getByUser", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], KeranjangUsersController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], KeranjangUsersController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], KeranjangUsersController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", void 0)
], KeranjangUsersController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], KeranjangUsersController.prototype, "remove", null);
__decorate([
    (0, common_1.Delete)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], KeranjangUsersController.prototype, "clear", null);
exports.KeranjangUsersController = KeranjangUsersController = __decorate([
    (0, common_1.Controller)('keranjang-users'),
    __metadata("design:paramtypes", [keranjang_users_service_1.KeranjangUsersService])
], KeranjangUsersController);
//# sourceMappingURL=keranjang-users.controller.js.map