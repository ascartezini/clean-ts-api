import { Group } from "@/domain/entities/Group";
import { User } from "@/domain/entities/User";
import { IGroupRepository } from "@/domain/repositories/IGroupRepository";
import { IEventDispatcher } from "@/infra/event-dispatcher/IEventDispatcher";
import { inject, injectable } from "tsyringe";
import { AddUserToGroupRequest } from "./dto/AddUserToGroupRequest";
import { UseCaseResponse } from "./dto/UseCaseResponse";
import { BaseUseCase } from "./BaseUseCase";

@injectable()
export class AddUserToGroupUseCase extends BaseUseCase<AddUserToGroupRequest> {    

    constructor(
        @inject("IGroupRepository") private groupRepository: IGroupRepository,
        @inject("IEventDispatcher") eventDispatcher: IEventDispatcher) {
        super(eventDispatcher, true);
    }

    createRequest(): AddUserToGroupRequest {
        return new AddUserToGroupRequest();
    }

    async innerHandler(request: AddUserToGroupRequest): Promise<UseCaseResponse> {

        let group: Group = new Group();
        group.name = 'group#1';
        group.active = true;
        group.addUser(new User);

        await this.groupRepository.addUserToGroup();

        return new UseCaseResponse(group.domainEvents, { result: 'user added' });
    }
}