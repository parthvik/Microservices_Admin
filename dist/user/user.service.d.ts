import { Repository } from 'typeorm';
import { User } from './user.entity';
import { MailService } from '../mail/mail.service';
export declare class UserService {
    private userRepository;
    private mailService;
    constructor(userRepository: Repository<User>, mailService: MailService);
    validateUser(username: string, password: string): Promise<User>;
    getUsersByGroup(groupId: number): Promise<User[]>;
}
