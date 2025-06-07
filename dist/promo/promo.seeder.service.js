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
exports.PromoSeeder = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const promo_entity_1 = require("./entities/promo.entity");
const typeorm_2 = require("typeorm");
let PromoSeeder = class PromoSeeder {
    promoRepository;
    constructor(promoRepository) {
        this.promoRepository = promoRepository;
    }
    async onApplicationBootstrap() {
        const data = [
            {
                id: 1234,
                namaPromo: 'Sarapan Sehat',
                deskripsiPromo: 'Sarapan Sehat dan Bergiji',
                tanggalDimulai: '2023-05-29',
                tanggalExpired: '2023-05-31',
            },
            {
                id: 1323,
                namaPromo: 'Roti Keong',
                deskripsiPromo: 'Roti Keong Nikmat',
                tanggalDimulai: '2023-05-29',
                tanggalExpired: '2023-05-30',
            },
            {
                id: 4136,
                namaPromo: 'Tasty Bread',
                deskripsiPromo: 'Roti Enak dan Bergiji',
                tanggalDimulai: '2023-06-03',
                tanggalExpired: '2023-06-09',
            },
            {
                id: 5743,
                namaPromo: 'Roti Tawar Yummy',
                deskripsiPromo: 'Roti Tawar Yummy',
                tanggalDimulai: '2023-05-29',
                tanggalExpired: '2023-05-31',
            },
            {
                id: 5829,
                namaPromo: 'Croissant Yummy',
                deskripsiPromo: 'Croissant enak dan wangi',
                tanggalDimulai: '2023-06-03',
                tanggalExpired: '2023-06-16',
            },
            {
                id: 5839,
                namaPromo: 'Chocolatte Cookies',
                deskripsiPromo: 'Kue Kukis dengan taburan chococips',
                tanggalDimulai: '2023-06-03',
                tanggalExpired: '2023-06-22',
            },
        ];
        for (const promo of data) {
            const exists = await this.promoRepository.findOneBy({ id: promo.id });
            if (!exists) {
                await this.promoRepository.insert(promo);
            }
        }
    }
};
exports.PromoSeeder = PromoSeeder;
exports.PromoSeeder = PromoSeeder = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(promo_entity_1.PromoEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], PromoSeeder);
//# sourceMappingURL=promo.seeder.service.js.map