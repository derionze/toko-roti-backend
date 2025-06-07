import { AuthService } from './auth.service';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    login(identifier: string, password: string): Promise<import("../users/entities/users.entity").UsersEntity>;
}
