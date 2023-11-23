"use client";

import TodoAddForm from "@/components/TodoAddForm";
import TodoItem from "@/components/TodoItem";
import { useTodoStore } from "@/store/TodoStore";
import { useState } from "react";

export type Todo = {
  id: number;
  title: string;
  completed: boolean;
};

export default function Home() {
  const todos: Todo[] = useTodoStore((state) => state.todos);

  return (
    <div className="bg-slate-900 min-h-screen w-full flex flex-col items-center">
      <div className="px-5 pt-5 w-full ">
        <h1 className="text-white text-3xl text-center">Todo App</h1>
        <TodoAddForm />
      </div>
      <div className="mt-6 w-full max-w-2xl">
        <ul className="space-y-3">
          {todos.map((todo) => (
            <TodoItem key={todo.id} todo={todo} />
          ))}
        </ul>
      </div>
    </div>
  );
}
