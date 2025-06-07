import { KeranjangUsersEntity } from "src/keranjang-users/entities/keranjang-users.entity";
export declare class UsersEntity {
    id: string;
    username: string;
    password: string;
    email: string;
    noTelp: string;
    tanggalLahir: string;
    alamat: string;
    keranjang: KeranjangUsersEntity[];
    role: 'admin' | 'pelanggan';
}
