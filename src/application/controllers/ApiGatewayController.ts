import { HttpRequest, HttpResponse } from "../protocols/https";
import { BaseUseCase } from "../use-cases/BaseUseCase";
import { HttpController } from "./HttpController";

export class ApiGatewayController extends HttpController {

    private event;
    private context;

    constructor(useCase: BaseUseCase<any>) {
        super(useCase);
    }

    adaptHttpRequest(): HttpRequest {
        const { headers, pathParameters, queryStringParameters, body } = this.event;

        return {
            headers,
            pathParameters,
            queryStringParameters,
            body: (body) ? JSON.parse(body) : ''
        }
    }

    async handleRequest(event, context): Promise<HttpResponse> {
        this.event = event;
        this.context = context;

        // do whatever is necessary with event and context

        return await super.handle();
    }
}