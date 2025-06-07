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
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersEntity = void 0;
const keranjang_users_entity_1 = require("../../keranjang-users/entities/keranjang-users.entity");
const typeorm_1 = require("typeorm");
let UsersEntity = class UsersEntity {
    id;
    username;
    password;
    email;
    noTelp;
    tanggalLahir;
    alamat;
    keranjang;
    role;
};
exports.UsersEntity = UsersEntity;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], UsersEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ unique: true }),
    __metadata("design:type", String)
], UsersEntity.prototype, "username", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], UsersEntity.prototype, "password", void 0);
__decorate([
    (0, typeorm_1.Column)({ unique: true }),
    __metadata("design:type", String)
], UsersEntity.prototype, "email", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true, name: 'no_telp' }),
    __metadata("design:type", String)
], UsersEntity.prototype, "noTelp", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true, name: 'tanggal_lahir' }),
    __metadata("design:type", String)
], UsersEntity.prototype, "tanggalLahir", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], UsersEntity.prototype, "alamat", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => keranjang_users_entity_1.KeranjangUsersEntity, keranjang => keranjang.user),
    __metadata("design:type", Array)
], UsersEntity.prototype, "keranjang", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], UsersEntity.prototype, "role", void 0);
exports.UsersEntity = UsersEntity = __decorate([
    (0, typeorm_1.Entity)('users')
], UsersEntity);
//# sourceMappingURL=users.entity.js.map