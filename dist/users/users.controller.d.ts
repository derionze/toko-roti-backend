import { UsersService } from './users.service';
import { UsersEntity } from './entities/users.entity';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    create(data: Partial<UsersEntity>): Promise<UsersEntity>;
    findAll(): Promise<UsersEntity[]>;
    findOne(id: string): Promise<UsersEntity>;
    update(id: string, data: Partial<UsersEntity>): Promise<UsersEntity>;
    remove(id: string): Promise<void>;
}
