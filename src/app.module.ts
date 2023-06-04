import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserController } from './user/user.controller';
import { UserService } from './user/user.service';
import { User } from './user/user.entity';
import { GroupController } from './group/group.controller';
import { GroupService } from './group/group.service';
import { Group } from './group/group.entity';
import { TransactionController } from './transaction/transaction.controller';
import { TransactionService } from './transaction/transaction.service';
import { Transaction } from './transaction/transaction.entity';
import { LocalStrategy } from './auth/local.strategy';
import { RolesGuard } from './auth/roles.guard';
import { MailService } from './mail/mail.service';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
         host: 'localhost',
         port: 3306,
         username: 'root',
         password: 'password',
         database: 'mydatabase',
         entities: [],
         synchronize: true,
    }),
    TypeOrmModule.forFeature([User, Group, Transaction]),
  ],
  controllers: [UserController, GroupController, TransactionController],
  providers: [
    UserService,
    GroupService,
    TransactionService,
    LocalStrategy,
    RolesGuard,
    MailService,
  ],
})
export class AppModule {}
