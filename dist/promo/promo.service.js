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
exports.PromoService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const promo_entity_1 = require("./entities/promo.entity");
const typeorm_2 = require("typeorm");
let PromoService = class PromoService {
    promoRepo;
    constructor(promoRepo) {
        this.promoRepo = promoRepo;
    }
    async findAll() {
        return this.promoRepo.find();
    }
    async findOne(id) {
        const promo = await this.promoRepo.findOne({ where: { id } });
        if (!promo) {
            throw new common_1.NotFoundException('Promo tidak ditemukan');
        }
        return promo;
    }
    async create(data) {
        const promo = this.promoRepo.create(data);
        return this.promoRepo.save(promo);
    }
    async update(id, data) {
        const promo = await this.findOne(id);
        Object.assign(promo, data);
        return this.promoRepo.save(promo);
    }
    async remove(id) {
        const promo = await this.findOne(id);
        await this.promoRepo.remove(promo);
    }
};
exports.PromoService = PromoService;
exports.PromoService = PromoService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(promo_entity_1.PromoEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], PromoService);
//# sourceMappingURL=promo.service.js.map