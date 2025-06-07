import { UsersEntity } from '../users/entities/users.entity';
import { Repository } from 'typeorm';
export declare class AuthService {
    private readonly usersRepo;
    constructor(usersRepo: Repository<UsersEntity>);
    login(identifier: string, password: string): Promise<UsersEntity>;
}
