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
exports.ProdukSeederService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const produk_entity_1 = require("./entities/produk.entity");
const typeorm_2 = require("typeorm");
let ProdukSeederService = class ProdukSeederService {
    produkRepo;
    constructor(produkRepo) {
        this.produkRepo = produkRepo;
    }
    async onModuleInit() {
        const count = await this.produkRepo.count();
        if (count > 0)
            return;
        const produkSeed = [
            { namaProduk: 'Baguette', harga: 10, stok: 12, kategori: 'Roti', deskripsi: 'Roti Baguette adalah produk roti khas yang dihasilkan...', rating: 4 },
            { namaProduk: 'Baggel Burger', harga: 20, stok: 4, kategori: 'Donat', deskripsi: 'Burger Bagel adalah inovasi kuliner yang menggabungkan...', rating: 4 },
            { namaProduk: 'Baked Bread', harga: 30, stok: 2, kategori: 'Roti', deskripsi: 'Roti panggang (baked bread) adalah hidangan lezat...', rating: 4 },
            { namaProduk: 'Glazed Donut', harga: 20, stok: 18, kategori: 'Donat', deskripsi: 'Donat dengan lapisan gula', rating: 5 },
            { namaProduk: 'Jelly Donut', harga: 21, stok: 27, kategori: 'Donat', deskripsi: 'Donat dengan isian krim jelly buah', rating: 5 },
            { namaProduk: 'Chocolate Donut', harga: 24, stok: 10, kategori: 'Donat', deskripsi: 'Donat dengan saus coklat', rating: 5 },
            { namaProduk: 'Chocochips Cookies', harga: 6, stok: 50, kategori: 'Kue Kering', deskripsi: 'Cookies dengan taburan chocochips', rating: 2 },
            { namaProduk: 'Cinnamon Donut', harga: 17, stok: 8, kategori: 'Donat', deskripsi: 'Donat dengan taburan gula kayu manis', rating: 3 },
            { namaProduk: 'White Bread', harga: 11, stok: 12, kategori: 'Roti', deskripsi: 'Roti tawar putih tanpa rasa', rating: 4 },
            { namaProduk: 'Blueberry Pastry', harga: 8, stok: 32, kategori: 'Pastry', deskripsi: 'Pastry dengan isian saus Blueberry', rating: 5 },
            { namaProduk: 'Sausage Pastry', harga: 19, stok: 6, kategori: 'Pastry', deskripsi: 'Pastry dengan isian sosis daging sapi', rating: 2 },
            { namaProduk: 'Apple Cake', harga: 28, stok: 4, kategori: 'Kue', deskripsi: 'Kue dengan rasa buah apel, menghasilkan rasa manis...', rating: 3 },
            { namaProduk: 'Carrot Cake', harga: 14, stok: 4, kategori: 'Kue', deskripsi: 'Kue dengan dasar bahan wortel, yang memiliki citra...', rating: 5 },
            { namaProduk: 'Apple Pastry', harga: 18, stok: 11, kategori: 'Pastry', deskripsi: 'Pastry dengan isian saus apel', rating: 5 },
            { namaProduk: 'Zeppole Donut', harga: 22, stok: 5, kategori: 'Donat', deskripsi: 'Donat dengan tekstur bersarang', rating: 5 },
            { namaProduk: 'Flaky Pastry', harga: 18, stok: 15, kategori: 'Pastry', deskripsi: 'Pastry dengan toping gula', rating: 5 },
            { namaProduk: 'Vanilla Cake', harga: 45, stok: 3, kategori: 'Kue', deskripsi: 'Kue rasa vanila', rating: 4 },
            { namaProduk: 'Plain Pastry', harga: 10, stok: 9, kategori: 'Pastry', deskripsi: 'Pastry tanpa rasa', rating: 4 },
        ];
        await this.produkRepo.save(produkSeed);
        console.log('✅ Produk seeded');
    }
};
exports.ProdukSeederService = ProdukSeederService;
exports.ProdukSeederService = ProdukSeederService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(produk_entity_1.ProdukEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], ProdukSeederService);
//# sourceMappingURL=produk.seeder.service.js.map