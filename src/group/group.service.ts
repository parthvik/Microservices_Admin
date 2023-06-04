import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Group } from './group.entity';

@Injectable()
export class GroupService {
  constructor(
    @InjectRepository(Group)
    private groupRepository: Repository<Group>,
  ) {}

  async createGroup(name: string): Promise<Group> {
    const group = new Group();
    group.name = name;
    return this.groupRepository.save(group);
  }

  async assignAdmin(groupId: number, adminId: number): Promise<Group> {
    const group = await this.groupRepository.findOne(groupId, { relations: ['users'] });
    group.adminId = adminId;
    return this.groupRepository.save(group);
  }
  

  async getGroupById(groupId: number): Promise<Group> {
    return this.groupRepository.findOne(groupId, { relations: ['users'] });
    

  }
}
