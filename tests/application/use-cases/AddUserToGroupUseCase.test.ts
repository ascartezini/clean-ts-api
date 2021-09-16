import "reflect-metadata"; // needed to make decorators work
import { AddUserToGroupUseCase } from "@/application/use-cases/AddUserToGroupUseCase";
import { IEventDispatcher } from "@/infra/event-dispatcher/IEventDispatcher";
import { mock } from 'jest-mock-extended';
import { UseCaseResponse } from "@/application/use-cases/dto/UseCaseResponse";
import { DomainEvent } from "@/domain/domain-events/DomainEvent";
import { AddUserToGroupRequest } from "@/application/use-cases/dto/AddUserToGroupRequest";
import { IGroupRepository } from "@/domain/repositories/IGroupRepository";

describe('AddUserToGroupUseCase', () => {

    describe('handle()', () => {
        test('Should not call dispatch when there is no domain event', async () => {
            const mockGroupRepository = mock<IGroupRepository>();
            const mockEventDispatcher = mock<IEventDispatcher>();
            const useCase = new AddUserToGroupUseCase(mockGroupRepository, mockEventDispatcher);
            const data = await useCase.handle({ groupId: 1, userId: 1 });

            expect(mockEventDispatcher.dispatch).toHaveBeenCalledTimes(1);
            expect(mockGroupRepository.addUserToGroup).toHaveBeenCalledTimes(1);
        })
    })
});
