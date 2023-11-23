import { create } from "zustand";
import { Todo } from "@/app/page";
import { devtools, persist } from "zustand/middleware";

interface TodoState {
  todos: Todo[] | [];
  addTodo: (todo: Todo) => void;
  deleteTodo: (id: number) => void;
  editTodo: (id: number, title: string) => void;
  toggleTodo: (id: number) => void;
}

export const useTodoStore = create<TodoState>()(
  devtools(
    persist(
      (set) => ({
        todos: [],

        addTodo: (todo) => set((state) => ({ todos: [...state.todos, todo] })),

        deleteTodo: (id) =>
          set((state) => ({
            todos: state.todos.filter((todo) => todo.id !== id),
          })),

        editTodo: (id, title) =>
          set((state) => ({
            todos: state.todos.map((todo) =>
              todo.id === id ? { ...todo, title } : todo
            ),
          })),

        toggleTodo: (id) =>
          set((state) => ({
            todos: state.todos.map((todo) =>
              todo.id === id ? { ...todo, completed: !todo.completed } : todo
            ),
          })),
      }),
      { name: "todos" }
    )
  )
);
