// import { BaseUseCase } from "../use-cases/BaseUseCase";
// import { Controller } from "./Controller";

// export class SqsController extends Controller<void> {

//     private event;
//     private context;

//     constructor(useCase: BaseUseCase<any>) {
//         super(useCase);
//     }

//     onValidationError(error: any): void {
//         throw new Error("Method not implemented.");
//     }

//     onUseCaseError(error: any): void {
//         throw new Error("Method not implemented.");
//     }

//     onUseCaseSuccess(data: any): void {
//         throw new Error("Method not implemented.");
//     }    

//     getRequestData() {
//         const { Records } = this.event;
//         let bodyItems = [];

//         Records?.forEach(record => {
//             const { body } = record;
//             bodyItems.push(JSON.parse(body));
//         });

//         return bodyItems;
//     }

//     async handleRequest(event, context): Promise<void> {
//         this.event = event;
//         this.context = context;

//         // do whatever is necessary with event and context

//         return await super.handle();
//     }
// }
