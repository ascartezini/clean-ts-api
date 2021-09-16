//** these two imports below have to be at the top */
import 'module-alias/register'; // needed to make module alias like @ work
import "reflect-metadata"; // needed to make decorators work
import { validateOrReject } from 'class-validator';
import { badRequest, created, ok, serverError } from '../helpers/http-helper';
import { HttpRequest, HttpResponse } from '../protocols/https';
import { BaseUseCase } from '../use-cases/BaseUseCase';

export abstract class HttpController {

    abstract adaptHttpRequest(): HttpRequest;

    constructor(private useCase: BaseUseCase<any>) {

    }

    async handle(): Promise<HttpResponse> {
        const httpRequest = this.adaptHttpRequest();
        const { headers, pathParameters, queryStringParameters, body } = httpRequest;

        let requestData = Object.assign(this.useCase.createRequest(), pathParameters, queryStringParameters, body);

        try {
            await validateOrReject(requestData);
        } catch (errors) {
            return badRequest(errors);
        }

        {
            let body: any;

            try {
                body = await this.useCase.handle(requestData);
            } catch (error) {
                return serverError(error);
            }

            return (this.useCase.isCreation) ? created(body, null) : ok(body);
        }
    }
}
