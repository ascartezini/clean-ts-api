// import { validateOrReject } from "class-validator";
// import { BaseUseCase } from "../use-cases/BaseUseCase";

// export abstract class Controller<T> {

//     constructor(protected useCase: BaseUseCase<any>) {

//     }

//     abstract onValidationError(error: any): T;
//     abstract onUseCaseError(error: any): T;
//     abstract onUseCaseSuccess(data: any): T;
//     abstract getRequestData(): any;

//     async handle(): Promise<T> {

//         let requestData = this.getRequestData();

//         try {
//             await validateOrReject(requestData);
//         } catch (error) {
//             return this.onValidationError(error);
//         }

//         {
//             let body: any;

//             try {
//                 body = await this.useCase.handle(requestData);
//             } catch (error) {
//                 return this.onUseCaseError(error);
//             }

//             return this.onUseCaseSuccess(body);
//         }
//     }
// }