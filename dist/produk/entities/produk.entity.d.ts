import { KeranjangUsersEntity } from "src/keranjang-users/entities/keranjang-users.entity";
export declare class ProdukEntity {
    id: string;
    namaProduk: string;
    harga: number;
    stok: number;
    kategori: string;
    deskripsi: string;
    rating: number;
    keranjang: KeranjangUsersEntity[];
}
