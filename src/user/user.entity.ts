import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from 'typeorm';
import { Group } from '../group/group.entity';
import { Transaction } from '../transaction/transaction.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  username: string;

  @Column()
  password: string;

  @Column()
  email: string;

  @Column()
  role: string;

  @ManyToOne(() => Group, (group) => group.users)
  group: Group;

  @OneToMany(() => Transaction, (transaction) => transaction.user)
  transactions: Transaction[];
}
