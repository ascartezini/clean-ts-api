export class DomainEvent {
    occurredOn: Date;
    
    constructor(public name: string) {
        this.occurredOn = new Date();
    }
}