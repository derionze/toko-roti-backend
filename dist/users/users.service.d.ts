import { UsersEntity } from './entities/users.entity';
import { Repository } from 'typeorm';
export declare class UsersService {
    private readonly usersRepo;
    constructor(usersRepo: Repository<UsersEntity>);
    create(data: Partial<UsersEntity>): Promise<UsersEntity>;
    findAll(): Promise<UsersEntity[]>;
    findOne(id: string): Promise<UsersEntity>;
    update(id: string, data: Partial<UsersEntity>): Promise<UsersEntity>;
    remove(id: string): Promise<void>;
}
