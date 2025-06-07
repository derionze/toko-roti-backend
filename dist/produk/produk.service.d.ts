import { Repository } from 'typeorm';
import { ProdukEntity } from './entities/produk.entity';
export declare class ProdukService {
    private readonly produkRepo;
    constructor(produkRepo: Repository<ProdukEntity>);
    findByQuery(searchItem?: string, category?: string): Promise<ProdukEntity[]>;
    create(data: Partial<ProdukEntity>): Promise<ProdukEntity>;
    findAll(): Promise<ProdukEntity[]>;
    findOne(id: string): Promise<ProdukEntity>;
    update(id: string, data: Partial<ProdukEntity>): Promise<ProdukEntity>;
    remove(id: string): Promise<void>;
}
