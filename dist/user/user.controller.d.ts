import { UserService } from './user.service';
export declare class UserController {
    private userService;
    constructor(userService: UserService);
    getUsersByGroup(groupId: number): Promise<import("./user.entity").User[]>;
}
