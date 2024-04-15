import {
  FastifyInstance,
  FastifyPluginOptions,
  FastifyRequest,
  FastifyReply,
} from "fastify";
import { CreateTaskController } from "./controllers/CreateTaskController";
import { ListTasksController } from "./controllers/ListTasksController";
import { DeleteTaskController } from "./controllers/DeleteTaskController";

export async function routes(
  fastify: FastifyInstance,
  options: FastifyPluginOptions
) {
  fastify.get(
    "/teste",
    async (request: FastifyRequest, reply: FastifyReply) => {
      return {
        ok: true,
      };
    }
  );

  fastify.post(
    "/task",
    async (request: FastifyRequest, reply: FastifyReply) => {
      return new CreateTaskController().handle(request, reply);
    }
  );

  fastify.get(
    "/tasks",
    async (request: FastifyRequest, reply: FastifyReply) => {
      return new ListTasksController().handle(request, reply);
    }
  );

  fastify.delete(
    "/task",
    async (request: FastifyRequest, reply: FastifyReply) => {
      return new DeleteTaskController().handle(request, reply);
    }
  );
}
