"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProdukModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const produk_entity_1 = require("./entities/produk.entity");
const produk_service_1 = require("./produk.service");
const produk_controller_1 = require("./produk.controller");
const produk_seeder_service_1 = require("./produk.seeder.service");
let ProdukModule = class ProdukModule {
};
exports.ProdukModule = ProdukModule;
exports.ProdukModule = ProdukModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([produk_entity_1.ProdukEntity])],
        providers: [produk_service_1.ProdukService, produk_seeder_service_1.ProdukSeederService],
        controllers: [produk_controller_1.ProdukController]
    })
], ProdukModule);
//# sourceMappingURL=produk.module.js.map