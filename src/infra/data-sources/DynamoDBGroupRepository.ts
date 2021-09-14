import { Group } from "@/domain/entities/Group";
import { IGroupRepository } from "@/domain/repositories/IGroupRepository";


export class DynamoDBGroupRepository implements IGroupRepository {
    async getById(id: number): Promise<Group> {
        let group = new Group();
        group.name = `group #${id}`;
        return group;
    }
    async addUserToGroup(): Promise<void> {

    }
    async getGroup(): Promise<Group> {
        return null;
    }

}