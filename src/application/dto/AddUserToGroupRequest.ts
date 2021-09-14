import { IsNumberString } from 'class-validator';

export class AddUserToGroupRequest {    
    @IsNumberString()
    userId: number;
    @IsNumberString()
    groupId: number;
}