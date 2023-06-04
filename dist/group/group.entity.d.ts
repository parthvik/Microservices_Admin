import { User } from '../user/user.entity';
export declare class Group {
    id: number;
    name: string;
    users: User[];
    adminId: number;
}
