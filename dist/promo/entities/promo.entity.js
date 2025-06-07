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
exports.PromoEntity = void 0;
const typeorm_1 = require("typeorm");
const typeorm_2 = require("typeorm");
let PromoEntity = class PromoEntity {
    id;
    namaPromo;
    deskripsiPromo;
    tanggalDimulai;
    tanggalExpired;
};
exports.PromoEntity = PromoEntity;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('increment'),
    __metadata("design:type", Number)
], PromoEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_2.Column)({ name: 'nama_promo' }),
    __metadata("design:type", String)
], PromoEntity.prototype, "namaPromo", void 0);
__decorate([
    (0, typeorm_2.Column)({ name: 'deskripsi_promo' }),
    __metadata("design:type", String)
], PromoEntity.prototype, "deskripsiPromo", void 0);
__decorate([
    (0, typeorm_2.Column)({ name: 'tanggal_dimulai' }),
    __metadata("design:type", String)
], PromoEntity.prototype, "tanggalDimulai", void 0);
__decorate([
    (0, typeorm_2.Column)({ name: 'tanggal_expired' }),
    __metadata("design:type", String)
], PromoEntity.prototype, "tanggalExpired", void 0);
exports.PromoEntity = PromoEntity = __decorate([
    (0, typeorm_2.Entity)('promo')
], PromoEntity);
//# sourceMappingURL=promo.entity.js.map