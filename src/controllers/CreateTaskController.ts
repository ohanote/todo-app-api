import { FastifyRequest, FastifyReply } from "fastify";
import { CreateTaskService } from "../services/CreateTaskService";

class CreateTaskController {
  async handle(request: FastifyRequest, reply: FastifyReply) {
    const { name, category, taskDate, startHour, finishHour } =
      request.body as {
        name: string;
        category: string;
        taskDate: string;
        startHour: string;
        finishHour: string;
      };

    const taskService = new CreateTaskService();

    const task = await taskService.execute({
      name,
      category,
      taskDate,
      startHour,
      finishHour,
    });

    reply.send(task);
  }
}

export { CreateTaskController };
