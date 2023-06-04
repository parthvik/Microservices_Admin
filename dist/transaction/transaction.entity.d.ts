import { User } from '../user/user.entity';
export declare class Transaction {
    id: number;
    description: string;
    file: string;
    user: User;
}
