import { UserAddedToGroup } from "../domain-events/UserAddedToGroup";
import { Entity } from "./Entity";
import { User } from "./User";

export class Group extends Entity {
    id: number;
    name: string;
    active: boolean;

    addUser(user: User): void {
        // business logic here
        if(!this.active) throw new Error('group is no longer active. user cannot be added');
        
        this.addDomainEvent(new UserAddedToGroup(this.id, user.id));
    }
}