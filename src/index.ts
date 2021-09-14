import { ApiGatewayController } from "./application/controllers/ApiGatewayController";
import { HttpController } from "./application/controllers/HttpController";
import { AddUserToGroupRequest } from "./application/dto/AddUserToGroupRequest";
import { handler } from "./application/handlers/AddUserToGroup";
import { AddUserToGroupUseCase } from "./application/use-cases/AddUserToGroupUseCase";
import { DynamoDBGroupRepository } from "./infra/data-sources/DynamoDBGroupRepository";

const event = {
    pathParameters: { groupId: "1", userId: "2" },
    // body: "{\"groupId\":1,\"userId\":1}"
}

new ApiGatewayController(new AddUserToGroupUseCase(new DynamoDBGroupRepository())).handleRequest(event, null).then(data => {
    console.log(data);
});

// handler(event, null).then(data => {
//     console.log(data);
// });



// import { handler } from "./application/handlers/GetGroupHandler";

// const event = {
//     pathParameters: { groupId: '1443' },
// }

// handler(event, null).then(data => {
//     console.log(data);
// });