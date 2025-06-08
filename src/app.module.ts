import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersController } from './users/users.controller';
import { UsersService } from './users/users.service';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersEntity } from './users/entities/users.entity';
import { ProdukController } from './produk/produk.controller';
import { ProdukService } from './produk/produk.service';
import { ProdukModule } from './produk/produk.module';
import { ProdukEntity } from './produk/entities/produk.entity';
import { AuthService } from './auth/auth.service';
import { AuthController } from './auth/auth.controller';
import { AuthModule } from './auth/auth.module';
import { KeranjangUsersController } from './keranjang-users/keranjang-users.controller';
import { KeranjangUsersService } from './keranjang-users/keranjang-users.service';
import { KeranjangUsersModule } from './keranjang-users/keranjang-users.module';
import { KeranjangUsersEntity } from './keranjang-users/entities/keranjang-users.entity';
import { PromoModule } from './promo/promo.module';
import { PromoEntity } from './promo/entities/promo.entity';

@Module({
  imports: [
    AppModule,
    // TypeOrmModule.forRoot({
    //   type: 'sqlite',
    //   database: 'database.sqlite',
    //   entities: [UsersEntity, ProdukEntity, KeranjangUsersEntity, PromoEntity],
    //   synchronize: true,
    // }),
    // UsersModule,
    // ProdukModule,
    // AuthModule,
    // KeranjangUsersModule,
    // PromoModule
  ],
  controllers: [AppController,],
  providers: [AppService,],
})
export class AppModule { }
