import { DomainEvent } from "@/domain/domain-events/DomainEvent";
import { IEventDispatcher } from "@/infra/event-dispatcher/IEventDispatcher";
import "../domain-event-listeners/index"; // necessary to register all event listeners
import { UseCaseResponse } from "./dto/UseCaseResponse";

export abstract class BaseUseCase<T> {    

    constructor(private eventDispatcher: IEventDispatcher, public isCreation: boolean) {

    }

    abstract createRequest(): T;

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
