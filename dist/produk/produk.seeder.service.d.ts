import { OnModuleInit } from '@nestjs/common';
import { ProdukEntity } from './entities/produk.entity';
import { Repository } from 'typeorm';
export declare class ProdukSeederService implements OnModuleInit {
    private readonly produkRepo;
    constructor(produkRepo: Repository<ProdukEntity>);
    onModuleInit(): Promise<void>;
}
