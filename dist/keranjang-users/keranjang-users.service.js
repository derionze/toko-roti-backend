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
exports.KeranjangUsersService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const keranjang_users_entity_1 = require("./entities/keranjang-users.entity");
const users_entity_1 = require("../users/entities/users.entity");
const produk_entity_1 = require("../produk/entities/produk.entity");
let KeranjangUsersService = class KeranjangUsersService {
    keranjangRepo;
    usersRepo;
    produkRepo;
    constructor(keranjangRepo, usersRepo, produkRepo) {
        this.keranjangRepo = keranjangRepo;
        this.usersRepo = usersRepo;
        this.produkRepo = produkRepo;
    }
    async create(data) {
        const user = await this.usersRepo.findOne({ where: { id: data.userId } });
        if (!user) {
            throw new Error('User tidak ditemukan');
        }
        const produk = await this.produkRepo.findOne({ where: { id: data.produkId } });
        if (!produk) {
            throw new Error('Produk tidak ditemukan');
        }
        const existingKeranjang = await this.keranjangRepo.findOne({
            where: {
                user: { id: data.userId },
                produk: { id: data.produkId },
            },
            relations: ['user', 'produk'],
        });
        if (existingKeranjang) {
            existingKeranjang.jumlah += data.jumlah;
            if (data.catatan) {
                existingKeranjang.catatan = data.catatan;
            }
            return this.keranjangRepo.save(existingKeranjang);
        }
        const { userId, ...payload } = data;
        const keranjang = this.keranjangRepo.create({ ...payload, user, produk });
        return this.keranjangRepo.save(keranjang);
    }
    async findAll() {
        return this.keranjangRepo.find({ relations: ['user', 'produk'] });
    }
    async findOne(id) {
        const keranjang = await this.keranjangRepo.findOne({
            where: { id },
            relations: ['user', 'produk'],
        });
        if (!keranjang)
            throw new common_1.NotFoundException('Data tidak ditemukan');
        return keranjang;
    }
    async update(id, data) {
        console.log(data);
        const keranjang = await this.findOne(id);
        Object.assign(keranjang, data);
        return this.keranjangRepo.save(keranjang);
    }
    async remove(id) {
        const keranjang = await this.findOne(id);
        if (!keranjang) {
            throw new Error('Keranjang tidak ditemukan');
        }
        if (keranjang.jumlah > 1) {
            keranjang.jumlah -= 1;
            return this.keranjangRepo.save(keranjang);
        }
        else {
            return this.keranjangRepo.remove(keranjang);
        }
    }
    async findAllByUser(userId) {
        try {
            const user = await this.usersRepo.findOne({ where: { id: userId } });
            if (!user) {
                throw new Error('User tidak ditemukan');
            }
            const keranjang = await this.keranjangRepo.find({ where: { user }, relations: ['user', 'produk'] });
            return keranjang;
        }
        catch (e) {
            throw e;
        }
    }
    async clearData() {
        try {
            await this.keranjangRepo.clear();
        }
        catch (e) {
            throw e;
        }
    }
};
exports.KeranjangUsersService = KeranjangUsersService;
exports.KeranjangUsersService = KeranjangUsersService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(keranjang_users_entity_1.KeranjangUsersEntity)),
    __param(1, (0, typeorm_1.InjectRepository)(users_entity_1.UsersEntity)),
    __param(2, (0, typeorm_1.InjectRepository)(produk_entity_1.ProdukEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository])
], KeranjangUsersService);
//# sourceMappingURL=keranjang-users.service.js.map