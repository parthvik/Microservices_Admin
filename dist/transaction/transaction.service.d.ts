import { Repository } from 'typeorm';
import { Transaction } from './transaction.entity';
export declare class TransactionService {
    private transactionRepository;
    constructor(transactionRepository: Repository<Transaction>);
    createTransaction(userId: number, description: string, file: string): Promise<Transaction>;
    getTransactionsByUser(userId: number): Promise<Transaction[]>;
    getTransactions(): Promise<Transaction[]>;
}
