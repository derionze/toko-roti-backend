import { KeranjangUsersService } from './keranjang-users.service';
export declare class KeranjangUsersController {
    private readonly keranjangUsersService;
    constructor(keranjangUsersService: KeranjangUsersService);
    getByUser(userId: string): Promise<import("./entities/keranjang-users.entity").KeranjangUsersEntity[]>;
    create(body: any): Promise<import("./entities/keranjang-users.entity").KeranjangUsersEntity>;
    findAll(): Promise<import("./entities/keranjang-users.entity").KeranjangUsersEntity[]>;
    findOne(id: number): Promise<import("./entities/keranjang-users.entity").KeranjangUsersEntity>;
    update(id: number, body: any): Promise<import("./entities/keranjang-users.entity").KeranjangUsersEntity>;
    remove(id: number): Promise<import("./entities/keranjang-users.entity").KeranjangUsersEntity>;
    clear(): Promise<void>;
}
