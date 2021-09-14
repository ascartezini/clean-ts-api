import { ApiGatewayController } from "../controllers/ApiGatewayController";
import { dependencyContainer } from "../DependencyContainer";
import { HttpResponse } from "../protocols/https";
import { GetGroupUseCase } from "../use-cases/GetGroupUseCase";

export const handler = async (event, context): Promise<HttpResponse> => {
    const useCase = dependencyContainer.resolve(GetGroupUseCase);
    return await new ApiGatewayController(useCase).handleRequest(event, context);
}