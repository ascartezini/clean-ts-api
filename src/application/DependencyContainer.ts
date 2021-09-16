import { DynamoDBGroupRepository } from '@/infra/data-sources/DynamoDBGroupRepository';
import { DomainEventDispatcher } from '@/infra/event-dispatcher/DomainEventDispatcher';
import { container } from "tsyringe";

container.register("IGroupRepository", { useClass: DynamoDBGroupRepository });
container.register("IEventDispatcher", { useClass: DomainEventDispatcher });

export const dependencyContainer = container;