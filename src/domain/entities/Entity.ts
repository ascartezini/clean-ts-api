import { DomainEvent } from "../domain-events/DomainEvent";

export abstract class Entity {
    domainEvents: Array<DomainEvent>;

    public addDomainEvent(domainEvent: DomainEvent): void {
        this.domainEvents = this.domainEvents ?? new Array<DomainEvent>();
        this.domainEvents.push(domainEvent);
    }
}