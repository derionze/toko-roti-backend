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
exports.KeranjangUsersEntity = void 0;
const typeorm_1 = require("typeorm");
const users_entity_1 = require("../../users/entities/users.entity");
const produk_entity_1 = require("../../produk/entities/produk.entity");
let KeranjangUsersEntity = class KeranjangUsersEntity {
    id;
    user;
    produk;
    jumlah;
    catatan;
};
exports.KeranjangUsersEntity = KeranjangUsersEntity;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], KeranjangUsersEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => users_entity_1.UsersEntity, user => user.keranjang, { onDelete: 'CASCADE' }),
    (0, typeorm_1.JoinColumn)({ name: 'user_id' }),
    __metadata("design:type", users_entity_1.UsersEntity)
], KeranjangUsersEntity.prototype, "user", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => produk_entity_1.ProdukEntity, produk => produk.keranjang, { onDelete: 'CASCADE' }),
    (0, typeorm_1.JoinColumn)({ name: 'produk_id' }),
    __metadata("design:type", produk_entity_1.ProdukEntity)
], KeranjangUsersEntity.prototype, "produk", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], KeranjangUsersEntity.prototype, "jumlah", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], KeranjangUsersEntity.prototype, "catatan", void 0);
exports.KeranjangUsersEntity = KeranjangUsersEntity = __decorate([
    (0, typeorm_1.Entity)('keranjang_users')
], KeranjangUsersEntity);
//# sourceMappingURL=keranjang-users.entity.js.map