import { ApiGatewayController } from "../application/controllers/ApiGatewayController";
import { dependencyContainer } from "../application/DependencyContainer";
import { HttpResponse } from "../application/protocols/https";
import { GetGroupUseCase } from "../application/use-cases/GetGroupUseCase";

const useCase = dependencyContainer.resolve(GetGroupUseCase);
const controller = new ApiGatewayController(useCase);
export const handler = async (event, context): Promise<HttpResponse> => {
    return await controller.handleRequest(event, context);
}