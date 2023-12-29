"use server";
import { PrismaClient } from "@prisma/client";
import { revalidatePath } from "next/cache";

const prisma = new PrismaClient();

export async function addTodo(formData: { get: (arg0: string) => any }) {
  const title = formData.get("grudgeName");
  const todo = await prisma.todo.create({
    data: {
      title: title,
      description: "Elsa Prisma",
    },
  });
  console.log("todo created");
  revalidatePath("/");
}
