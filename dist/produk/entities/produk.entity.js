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
exports.ProdukEntity = void 0;
const keranjang_users_entity_1 = require("../../keranjang-users/entities/keranjang-users.entity");
const typeorm_1 = require("typeorm");
let ProdukEntity = class ProdukEntity {
    id;
    namaProduk;
    harga;
    stok;
    kategori;
    deskripsi;
    rating;
    keranjang;
};
exports.ProdukEntity = ProdukEntity;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('increment'),
    __metadata("design:type", String)
], ProdukEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'nama_produk' }),
    __metadata("design:type", String)
], ProdukEntity.prototype, "namaProduk", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], ProdukEntity.prototype, "harga", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], ProdukEntity.prototype, "stok", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], ProdukEntity.prototype, "kategori", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], ProdukEntity.prototype, "deskripsi", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], ProdukEntity.prototype, "rating", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => keranjang_users_entity_1.KeranjangUsersEntity, keranjang => keranjang.produk),
    __metadata("design:type", Array)
], ProdukEntity.prototype, "keranjang", void 0);
exports.ProdukEntity = ProdukEntity = __decorate([
    (0, typeorm_1.Entity)('produk')
], ProdukEntity);
//# sourceMappingURL=produk.entity.js.map