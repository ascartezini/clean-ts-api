import { IGroupRepository } from "@/domain/repositories/IGroupRepository";
import { inject, injectable } from "tsyringe";
import { GetGroupRequest } from "../dto/GetGroupRequest";
import { UseCaseResponse } from "../dto/UseCaseResponse";
import { BaseUseCase } from "./BaseUseCase";

@injectable()
export class GetGroupUseCase extends BaseUseCase<GetGroupRequest> {

    constructor(@inject("IGroupRepository") private groupRepository: IGroupRepository) {
        super(true);
    }

    async innerHandler(request: GetGroupRequest): Promise<UseCaseResponse> {
                
        let group = await this.groupRepository.getById(request.groupId);

        return new UseCaseResponse(group.domainEvents, group);
    }
}