import { Controller, Post, Body, Param, Put, UseGuards } from '@nestjs/common';
import { GroupService } from './group.service';
// import { Roles } from '../auth/roles.decorator';
import { RolesGuard } from '../auth/roles.guard';
import { AuthGuard } from '@nestjs/passport';

@Controller('groups')
export class GroupController {
  constructor(private groupService: GroupService) {}

  @Post()
  // @Roles('super-admin')
  @UseGuards(AuthGuard('jwt'), RolesGuard)
  async createGroup(@Body() body: { name: string }) {
    return this.groupService.createGroup(body.name);
  }

  @Put(':groupId/admin/:adminId')
  // @Roles('super-admin')
  @UseGuards(AuthGuard('jwt'), RolesGuard)
  async assignAdmin(
    @Param('groupId') groupId: number,
    @Param('adminId') adminId: number,
  ) {
    return this.groupService.assignAdmin(groupId, adminId);
  }
}
