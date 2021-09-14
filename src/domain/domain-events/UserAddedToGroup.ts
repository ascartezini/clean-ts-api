import { DomainEvent } from "./DomainEvent";
import { Events } from "./Events";

export class UserAddedToGroup extends DomainEvent {
    constructor(public groupId: number, public userId: number) {
        super(Events.userAddedToGroup);
    }
}