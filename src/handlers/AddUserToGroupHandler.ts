import { ApiGatewayController } from "../application/controllers/ApiGatewayController";
import { dependencyContainer } from "../application/DependencyContainer";
import { HttpResponse } from "../application/protocols/https";
import { AddUserToGroupUseCase } from "../application/use-cases/AddUserToGroupUseCase";

const useCase = dependencyContainer.resolve(AddUserToGroupUseCase);
const controller = new ApiGatewayController(useCase);
export const handler = async (event, context): Promise<HttpResponse> => {
    return await controller.handleRequest(event, context);
}
