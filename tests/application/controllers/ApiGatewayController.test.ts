import { ApiGatewayController } from "@/application/controllers/ApiGatewayController"
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

const mockEventDispatcher = mock<IEventDispatcher>();

describe('ApiGatewayController', () => {
    describe('getRequestData()', () => {
        test('Should return object with pathParameters properties on getRequestData', async () => {
            const event = {
                pathParameters: { groupId: "1", userId: "2" },
            };

            const sut = new ApiGatewayController(new UseCaseStub(mockEventDispatcher, false));
            await sut.handleRequest(event, null);
            const reqData = sut.adaptHttpRequest();

            expect(reqData.headers).toBeUndefined();
            expect(reqData.queryStringParameters).toBeUndefined();
            expect(reqData.body).toBe('');
            expect(reqData.pathParameters).toEqual({
                groupId: "1",
                userId: "2"
            });
        })
    })

    describe('getRequestData()', () => {
        test('Should return object with queryStringParameters properties on getRequestData', async () => {
            const event = {
                queryStringParameters: { groupId: "1", userId: "2" },
            };
            const sut = new ApiGatewayController(new UseCaseStub(mockEventDispatcher, false));
            await sut.handleRequest(event, null);
            const reqData = sut.adaptHttpRequest();

            expect(reqData.headers).toBeUndefined();
            expect(reqData.pathParameters).toBeUndefined();
            expect(reqData.body).toBe('');
            expect(reqData.queryStringParameters).toEqual({
                groupId: "1",
                userId: "2"
            });
        })
    })

    describe('getRequestData()', () => {
        test('Should return object with body properties on getRequestData', async () => {
            const event = {
                body: "{\"groupId\":1,\"userId\":2}"
            };
            const sut = new ApiGatewayController(new UseCaseStub(mockEventDispatcher, false));
            await sut.handleRequest(event, null);
            const reqData = sut.adaptHttpRequest();

            expect(reqData.headers).toBeUndefined();
            expect(reqData.pathParameters).toBeUndefined();
            expect(reqData.queryStringParameters).toBeUndefined();
            expect(reqData.body).toEqual({
                groupId: 1,
                userId: 2
            });
        })
    })

    describe('getRequestData()', () => {
        test('Should return object with pathParameters and body properties on getRequestData', async () => {
            const event = {
                pathParameters: { groupId: '1' },
                body: "{\"name\":\"group#1\"}"
            };
            const sut = new ApiGatewayController(new UseCaseStub(mockEventDispatcher, false));
            await sut.handleRequest(event, null);
            const reqData = sut.adaptHttpRequest();

            expect(reqData.headers).toBeUndefined();
            expect(reqData.queryStringParameters).toBeUndefined();
            expect(reqData.pathParameters).toEqual({
                groupId: '1'
            });
            expect(reqData.body).toEqual({
                name: 'group#1'
            });
        })
    })
});
