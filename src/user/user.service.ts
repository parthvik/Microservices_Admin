import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import { MailService } from '../mail/mail.service';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
    private mailService: MailService,
  ) {}

  // Other methods...

  async validateUser(username: string, password: string): Promise<User> {
    const user = await this.userRepository.findOne({ username });

    if (user && await user.comparePassword(password)) {
      return user;
    }

    return null;
  }

  async getUsersByGroup(groupId: number): Promise<User[]> {
    return this.userRepository.find({ where: { group: { id: groupId } } });
  }
}
