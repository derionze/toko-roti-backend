import { PromoEntity } from './entities/promo.entity';
import { Repository } from 'typeorm';
export declare class PromoService {
    private readonly promoRepo;
    constructor(promoRepo: Repository<PromoEntity>);
    findAll(): Promise<PromoEntity[]>;
    findOne(id: number): Promise<PromoEntity>;
    create(data: Partial<PromoEntity>): Promise<PromoEntity>;
    update(id: number, data: Partial<PromoEntity>): Promise<PromoEntity>;
    remove(id: number): Promise<void>;
}
