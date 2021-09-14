// import { HttpController } from "./HttpController";

// export class SqsController extends HttpController {

//     constructor(private event, private context) {
//         super();
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
// }
