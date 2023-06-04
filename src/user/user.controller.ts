import { Controller, Get, Param, UseGuards } from '@nestjs/common';
import { UserService } from './user.service';
// import { Roles } from '../auth/roles.decorator';
import { RolesGuard } from '../auth/roles.guard';
import { AuthGuard } from '@nestjs/passport';

@Controller('users')
export class UserController {
  constructor(private userService: UserService) {}

  @Get('group/:groupId')
  // @Roles('power-user')
  @UseGuards(AuthGuard('jwt'), RolesGuard)
  async getUsersByGroup(@Param('groupId') groupId: number) {
    return this.userService.getUsersByGroup(groupId);
  }
}
