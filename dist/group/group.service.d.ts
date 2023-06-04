import { Repository } from 'typeorm';
import { Group } from './group.entity';
export declare class GroupService {
    private groupRepository;
    constructor(groupRepository: Repository<Group>);
    createGroup(name: string): Promise<Group>;
    assignAdmin(groupId: number, adminId: number): Promise<Group>;
    getGroupById(groupId: number): Promise<Group>;
}
