import { OnApplicationBootstrap } from '@nestjs/common';
import { PromoEntity } from './entities/promo.entity';
import { Repository } from 'typeorm';
export declare class PromoSeeder implements OnApplicationBootstrap {
    private readonly promoRepository;
    constructor(promoRepository: Repository<PromoEntity>);
    onApplicationBootstrap(): Promise<void>;
}
