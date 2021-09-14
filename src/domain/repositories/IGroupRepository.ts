import { Group } from "@/domain/entities/Group";

export interface IGroupRepository {
    addUserToGroup(): Promise<void>;
    getById(id: number): Promise<Group>;
}