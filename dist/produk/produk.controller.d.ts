import { ProdukService } from './produk.service';
import { ProdukEntity } from './entities/produk.entity';
export declare class ProdukController {
    private readonly produkService;
    constructor(produkService: ProdukService);
    create(data: Partial<ProdukEntity>): Promise<ProdukEntity>;
    findByQuery(searchItem?: string, category?: string): Promise<ProdukEntity[]>;
    findOne(id: string): Promise<ProdukEntity>;
    update(id: string, data: Partial<ProdukEntity>): Promise<ProdukEntity>;
    remove(id: string): Promise<void>;
}
