import {
    Controller,
    Post,
    Body,
    Param,
    Get,
    UseGuards,
  } from '@nestjs/common';
  import { TransactionService } from './transaction.service';
  // import { Roles } from '../auth/roles.decorator';
  import { RolesGuard } from '../auth/roles.guard';
  import { AuthGuard } from '@nestjs/passport';
  
  @Controller('transactions')
  export class TransactionController {
    constructor(private transactionService: TransactionService) {}
  
    @Post(':userId')
    // @Roles('user')
    @UseGuards(AuthGuard('jwt'), RolesGuard)
    async createTransaction(
      @Param('userId') userId: number,
      @Body() body: { description: string; file: string },
    ) {
      return this.transactionService.createTransaction(
        userId,
        body.description,
        body.file,
      );
    }
  
    @Get('user/:userId')
    // @Roles('user')
    @UseGuards(AuthGuard('jwt'), RolesGuard)
    async getTransactionsByUser(@Param('userId') userId: number) {
      return this.transactionService.getTransactionsByUser(userId);
    }
  
    @Get()
    // @Roles('support-desk')
    @UseGuards(AuthGuard('jwt'), RolesGuard)
    async getTransactions() {
      return this.transactionService.getTransactions();
    }
  }
  