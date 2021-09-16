import { IEventDispatcher } from "./IEventDispatcher";
import { EventDispatcher } from "event-dispatch";

export class DomainEventDispatcher implements IEventDispatcher {

    private eventDispatcher = new EventDispatcher();

    dispatch(eventName: string, data?: any): void {
        this.eventDispatcher.dispatch(eventName, data);
    }

}