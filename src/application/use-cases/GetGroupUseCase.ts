import { IGroupRepository } from "@/domain/repositories/IGroupRepository";
import { IEventDispatcher } from "@/infra/event-dispatcher/IEventDispatcher";
import { inject, injectable } from "tsyringe";
import { GetGroupRequest } from "./dto/GetGroupRequest";
import { UseCaseResponse } from "./dto/UseCaseResponse";
import { BaseUseCase } from "./BaseUseCase";

@injectable()
export class GetGroupUseCase extends BaseUseCase<GetGroupRequest> {

    constructor(
        @inject("IGroupRepository") private groupRepository: IGroupRepository,
        @inject("IEventDispatcher") eventDispatcher: IEventDispatcher) {
        super(eventDispatcher, false);
    }

    createRequest(): GetGroupRequest {
        return new GetGroupRequest();
    }

    async innerHandler(request: GetGroupRequest): Promise<UseCaseResponse> {

        let group = await this.groupRepository.getById(request.groupId);

        return new UseCaseResponse(group.domainEvents, group);
    }
}