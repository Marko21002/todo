import Image from "next/image";
import { addTodo } from "./actions/addTodo";
import { useRouter } from "next/navigation";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function Home() {
  const todos = await prisma.todo.findMany();

  return (
    <div className="w-[80%] mx-auto mt-8 rounded-2xl p-4 bg-gray-100">
      <form action={addTodo} className="mb-4">
        <input
          type="text"
          className="w-full text-center h-12 p-3 border-2 border-black rounded focus:outline-none focus:border-blue-500"
          placeholder="Enter text here"
          name="grudgeName"
        />
        <button
          type="submit"
          className="mt-2 h-12 w-full px-4 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
        >
          Submit
        </button>
      </form>
      {todos.map((todo) => (
        <div
          key={todo.id}
          className="text-center p-4 bg-black text-purple-500 mb-4 rounded-lg"
        >
          <strong className="text-white">{todo.title}</strong>:{" "}
          {todo.description}
        </div>
      ))}
    </div>
  );
}
