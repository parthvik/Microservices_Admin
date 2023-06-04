import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Transaction } from './transaction.entity';
import { User } from '../user/user.entity';


@Injectable()
export class TransactionService {
  constructor(
    @InjectRepository(Transaction)
    private transactionRepository: Repository<Transaction>,
  ) {}

  async createTransaction(
    userId: number,
    description: string,
    file: string,
  ): Promise<Transaction> {
    const transaction = new Transaction();
    transaction.description = description;
    transaction.file = file;
    transaction.user = { id: userId } as User;
    return this.transactionRepository.save(transaction);
  }

  async getTransactionsByUser(userId: number): Promise<Transaction[]> {
    return this.transactionRepository.find({ where: { user: { id: userId } } });
  }

  async getTransactions(): Promise<Transaction[]> {
    return this.transactionRepository.find({ relations: ['user'] });
  }
}
