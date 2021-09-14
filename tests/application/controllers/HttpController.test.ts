import { HttpController } from "@/application/controllers/HttpController"
import { HttpRequest } from "@/application/protocols/https";
import { BaseUseCase } from "@/application/use-cases/BaseUseCase";
import { UseCaseResponse } from "@/application/dto/UseCaseResponse";

class HttpControllerStub extends HttpController {
    adaptHttpRequest(): HttpRequest {
        return {
            pathParameters: { groupId: "1" },
        }
    }
}

class RequestData {
    groupId: number;
}

class UseCaseStub extends BaseUseCase<RequestData> {
    protected async innerHandler(data: any): Promise<UseCaseResponse> {
        return new UseCaseResponse(null, null);
    }
}


describe('HttpController', () => {
    describe('handle()', () => {
        test('Should return status 200 when execution is ok', async () => {
            let sut: HttpControllerStub = new HttpControllerStub(new UseCaseStub(false));
            let response = await sut.handle();

            expect(response.statusCode).toBe(200);
            expect(response.body).toBe("null");
        })
    })
});
