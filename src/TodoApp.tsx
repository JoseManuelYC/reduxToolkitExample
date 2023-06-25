import { useState } from "react";
import { useGetTodoByIdQuery, useGetTodosQuery } from "./store/apis/todosApi";

type TodoProps = {
  completed: boolean;
  id: number;
  title: string;
};

export const TodoApp = () => {
  const [todo, setTodo] = useState(1);
  const { data: todos = [], isLoading } = useGetTodosQuery("");
  const { data: todoId } = useGetTodoByIdQuery(todo);

  const onNextTodo = () => {
    setTodo(todo + 1);
  };
  const onPrevTodo = () => {
    if (todo === 1) return;
    setTodo(todo - 1);
  };
  return (
    <>
      <h1>Todo-RTK Query</h1>
      <hr />
      <h2>isLoading: {isLoading ? "True" : "False"}</h2>
      <pre>...</pre>
      <strong>{todoId?.completed ? "DONE" : "PENDING"}: </strong>
      <span>{todoId?.title}</span>
      <button onClick={onNextTodo}>Next To-do</button>
      <button onClick={onPrevTodo}>Previus To-do</button>
      <ul>
        {todos.map(({ completed, id, title }: TodoProps) => (
          <li key={id}>
            <strong>{completed ? "DONE" : "Pending"}: </strong>
            <span>{title}</span>
          </li>
        ))}
      </ul>
    </>
  );
};
