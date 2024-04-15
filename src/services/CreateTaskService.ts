import prismaClient from "../prisma";

interface CreateTaskProps {
  name: string;
  category: string;
  taskDate: string;
  startHour: string;
  finishHour: string;
}

class CreateTaskService {
  async execute({
    name,
    category,
    taskDate,
    startHour,
    finishHour,
  }: CreateTaskProps) {
    if (!name || !category) {
      throw new Error("Preencha os campos obrigatórios");
    }

    const task = await prismaClient.task.create({
      data: {
        name,
        category,
        taskDate,
        startHour,
        finishHour,
      },
    });

    return { task };
  }
}

export { CreateTaskService };
