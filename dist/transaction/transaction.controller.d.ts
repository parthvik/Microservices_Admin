import { TransactionService } from './transaction.service';
export declare class TransactionController {
    private transactionService;
    constructor(transactionService: TransactionService);
    createTransaction(userId: number, body: {
        description: string;
        file: string;
    }): Promise<import("./transaction.entity").Transaction>;
    getTransactionsByUser(userId: number): Promise<import("./transaction.entity").Transaction[]>;
    getTransactions(): Promise<import("./transaction.entity").Transaction[]>;
}
