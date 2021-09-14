import { DynamoDBGroupRepository } from '@/infra/data-sources/DynamoDBGroupRepository';
import { container } from "tsyringe";

container.register("IGroupRepository", { useClass: DynamoDBGroupRepository });

export const dependencyContainer = container;