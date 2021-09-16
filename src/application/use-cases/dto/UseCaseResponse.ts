import { DomainEvent } from "@/domain/domain-events/DomainEvent";

export class UseCaseResponse {
    constructor(public domainEvents: DomainEvent[], public content: any) {

    }
}