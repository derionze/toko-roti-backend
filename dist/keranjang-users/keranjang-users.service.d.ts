import { Repository } from 'typeorm';
import { KeranjangUsersEntity } from './entities/keranjang-users.entity';
import { UsersEntity } from 'src/users/entities/users.entity';
import { ProdukEntity } from 'src/produk/entities/produk.entity';
export declare class KeranjangUsersService {
    private readonly keranjangRepo;
    private readonly usersRepo;
    private readonly produkRepo;
    constructor(keranjangRepo: Repository<KeranjangUsersEntity>, usersRepo: Repository<UsersEntity>, produkRepo: Repository<ProdukEntity>);
    create(data: {
        userId: string;
        produkId: string;
        jumlah: number;
        catatan?: string;
    }): Promise<KeranjangUsersEntity>;
    findAll(): Promise<KeranjangUsersEntity[]>;
    findOne(id: number): Promise<KeranjangUsersEntity>;
    update(id: number, data: Partial<KeranjangUsersEntity>): Promise<KeranjangUsersEntity>;
    remove(id: number): Promise<KeranjangUsersEntity>;
    findAllByUser(userId: string): Promise<KeranjangUsersEntity[]>;
    clearData(): Promise<void>;
}
