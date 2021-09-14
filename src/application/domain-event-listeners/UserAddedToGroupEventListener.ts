import { Events } from "@/domain/domain-events/Events";
import { UserAddedToGroup } from "@/domain/domain-events/UserAddedToGroup";
import { EventSubscriber, On } from "event-dispatch";

@EventSubscriber()
export class UserAddedToGroupEventListener {
    @On(Events.userAddedToGroup)
    onUserAddedToGroup(event: UserAddedToGroup) {
        console.log(`${event.name} dispatched`);
    }
}