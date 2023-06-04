import { GroupService } from './group.service';
export declare class GroupController {
    private groupService;
    constructor(groupService: GroupService);
    createGroup(body: {
        name: string;
    }): Promise<import("./group.entity").Group>;
    assignAdmin(groupId: number, adminId: number): Promise<import("./group.entity").Group>;
}
