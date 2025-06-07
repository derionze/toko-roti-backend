import { UsersEntity } from 'src/users/entities/users.entity';
import { ProdukEntity } from 'src/produk/entities/produk.entity';
export declare class KeranjangUsersEntity {
    id: number;
    user: UsersEntity;
    produk: ProdukEntity;
    jumlah: number;
    catatan: string;
}
