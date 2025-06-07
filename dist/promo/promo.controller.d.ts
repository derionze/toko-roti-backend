import { PromoService } from './promo.service';
import { PromoEntity } from './entities/promo.entity';
export declare class PromoController {
    private readonly promoService;
    constructor(promoService: PromoService);
    findAll(): Promise<PromoEntity[]>;
    findOne(id: number): Promise<PromoEntity>;
    create(data: Partial<PromoEntity>): Promise<PromoEntity>;
    update(id: number, data: Partial<PromoEntity>): Promise<PromoEntity>;
    remove(id: number): Promise<void>;
}
