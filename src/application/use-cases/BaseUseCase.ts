import { DomainEvent } from "@/domain/domain-events/DomainEvent";
import { EventDispatcher } from "event-dispatch";
import "../domain-event-listeners/index"; // necessary to register all event listeners
import { UseCaseResponse } from "../dto/UseCaseResponse";

export abstract class BaseUseCase<T> implements IUseCase<T> {
    private eventDispatcher = new EventDispatcher();
    requestData: Partial<T> = {};
    isCreation: boolean;

    constructor(isCreation: boolean) {
        this.isCreation = isCreation;
    }

    protected abstract innerHandler(data: any): Promise<UseCaseResponse>;

    async handle(data: T): Promise<any> {
        let response: UseCaseResponse;

        response = await this.innerHandler(data);
        response.domainEvents?.forEach((domainEvent: DomainEvent) => {
            this.eventDispatcher.dispatch(domainEvent.name, domainEvent);
        });

        return response.content;
    }
}

interface IUseCase<T> {
    handle(data: T): Promise<any>;
}