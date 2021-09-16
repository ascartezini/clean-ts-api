import { HttpController } from "@/application/controllers/HttpController"
import { HttpRequest } from "@/application/protocols/https";
import { BaseUseCase } from "@/application/use-cases/BaseUseCase";
import { UseCaseResponse } from "@/application/use-cases/dto/UseCaseResponse";
import { mock } from "jest-mock-extended";
import { IEventDispatcher } from "@/infra/event-dispatcher/IEventDispatcher";

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
    createRequest(): RequestData {
        return new RequestData();
    }
    protected async innerHandler(data: any): Promise<UseCaseResponse> {
        return new UseCaseResponse(null, null);
    }
}

class NonEmptyReturnUseCaseStub extends BaseUseCase<RequestData> {
    createRequest(): RequestData {
        return new RequestData();
    }
    protected async innerHandler(data: any): Promise<UseCaseResponse> {
        return new UseCaseResponse(null, { groupId: 1, name: 'group1' });
    }
}

const mockEventDispatcher = mock<IEventDispatcher>();

describe('HttpController', () => {
    describe('handle()', () => {
        test('Should return status 200 when execution is ok', async () => {
            let sut: HttpControllerStub = new HttpControllerStub(new UseCaseStub(mockEventDispatcher, false));
            let response = await sut.handle();

            expect(response.statusCode).toBe(200);
            expect(response.body).toBe("null");
        })
    })

    describe('handle()', () => {
        test('Should return status 201 when the use case is creation', async () => {
            let sut: HttpControllerStub = new HttpControllerStub(new NonEmptyReturnUseCaseStub(mockEventDispatcher, true));
            let response = await sut.handle();

            expect(response.statusCode).toBe(201);
            expect(response.body).toBe(JSON.stringify({ groupId: 1, name: 'group1' }));
        })
    })
});
