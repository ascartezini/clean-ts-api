import { ApiGatewayController } from "../controllers/ApiGatewayController";
import { HttpResponse } from "../protocols/https";
import { AddUserToGroupUseCase } from "../use-cases/AddUserToGroupUseCase";
import { dependencyContainer } from "../DependencyContainer";

export const handler = async (event, context): Promise<HttpResponse> => {
    const useCase = dependencyContainer.resolve(AddUserToGroupUseCase);
    return await new ApiGatewayController(useCase).handleRequest(event, context);
}
