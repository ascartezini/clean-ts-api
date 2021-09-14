import { IsNumberString } from 'class-validator';

export class GetGroupRequest {
    @IsNumberString()
    groupId: number;
}