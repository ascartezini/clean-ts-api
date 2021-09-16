import { BaseUseCase } from "@/application/use-cases/BaseUseCase";
import { IEventDispatcher } from "@/infra/event-dispatcher/IEventDispatcher";
import { mock } from 'jest-mock-extended';
import { UseCaseResponse } from "@/application/use-cases/dto/UseCaseResponse";
import { DomainEvent } from "@/domain/domain-events/DomainEvent";

class StubRequestData { }

class StubEmptyUseCase extends BaseUseCase<StubRequestData>{
    createRequest(): StubRequestData {
        return new StubRequestData();
    }
    override async innerHandler(data: any): Promise<UseCaseResponse> {
        return new UseCaseResponse(null, null);
    }
}

class StubUseCase extends BaseUseCase<StubRequestData>{
    createRequest(): StubRequestData {
        return new StubRequestData();
    }
    override async innerHandler(data: any): Promise<UseCaseResponse> {
        return new UseCaseResponse([new DomainEvent('AnyDomainEvent')], { groupId: 1, name: 'groupName' });
    }
}

describe('BaseUseCase', () => {

    describe('handle()', () => {
        test('Should not call dispatch when there is no domain event', async () => {
            const mockEventDispatcher = mock<IEventDispatcher>();
            const useCase = new StubEmptyUseCase(mockEventDispatcher, false);

            await useCase.handle(new StubRequestData);

            expect(mockEventDispatcher.dispatch).toHaveBeenCalledTimes(0);
        })
    })

    describe('handle()', () => {
        test('Should call dispatch once when there is one domain event', async () => {
            const mockEventDispatcher = mock<IEventDispatcher>();
            const useCase = new StubUseCase(mockEventDispatcher, false);

            await useCase.handle(new StubRequestData);

            expect(mockEventDispatcher.dispatch).toHaveBeenCalledTimes(1);
        })
    })

    describe('handle()', () => {
        test('Should call dispatch once with name AnyDomainEvent when there is one domain event', async () => {
            const mockEventDispatcher = mock<IEventDispatcher>();
            const useCase = new StubUseCase(mockEventDispatcher, false);

            await useCase.handle(new StubRequestData);

            expect(mockEventDispatcher.dispatch).toHaveBeenCalledTimes(1);
        })
    })
});
