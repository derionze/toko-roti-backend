"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const users_module_1 = require("./users/users.module");
const typeorm_1 = require("@nestjs/typeorm");
const users_entity_1 = require("./users/entities/users.entity");
const produk_module_1 = require("./produk/produk.module");
const produk_entity_1 = require("./produk/entities/produk.entity");
const auth_module_1 = require("./auth/auth.module");
const keranjang_users_module_1 = require("./keranjang-users/keranjang-users.module");
const keranjang_users_entity_1 = require("./keranjang-users/entities/keranjang-users.entity");
const promo_module_1 = require("./promo/promo.module");
const promo_entity_1 = require("./promo/entities/promo.entity");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forRoot({
                type: 'sqlite',
                database: 'database.sqlite',
                entities: [users_entity_1.UsersEntity, produk_entity_1.ProdukEntity, keranjang_users_entity_1.KeranjangUsersEntity, promo_entity_1.PromoEntity],
                synchronize: true,
            }),
            users_module_1.UsersModule,
            produk_module_1.ProdukModule,
            auth_module_1.AuthModule,
            keranjang_users_module_1.KeranjangUsersModule,
            promo_module_1.PromoModule
        ],
        controllers: [app_controller_1.AppController,],
        providers: [app_service_1.AppService,],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map