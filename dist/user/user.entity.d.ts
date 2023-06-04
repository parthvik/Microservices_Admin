import { Group } from '../group/group.entity';
import { Transaction } from '../transaction/transaction.entity';
export declare class User {
    id: number;
    username: string;
    password: string;
    email: string;
    role: string;
    group: Group;
    transactions: Transaction[];
}
