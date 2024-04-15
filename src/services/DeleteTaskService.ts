import prismaClient from "../prisma";

interface DeleteTaskProps {
  id: string;
}

class DeleteTaskService {
  async execute({ id }: DeleteTaskProps) {
    if (!id) {
      throw new Error("Solicitação Inválida");
    }

    const findTask = await prismaClient.task.findFirst({
      where: {
        id: id,
      },
    });

    if (!findTask) {
      throw new Error("Task não existe");
    }

    await prismaClient.task.delete({
      where: {
        id: findTask.id,
      },
    });

    return { message: "Deletado com sucesso" };
  }
}

export { DeleteTaskService };
