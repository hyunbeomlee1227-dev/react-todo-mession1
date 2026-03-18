import { useEffect, useRef, useState } from "react";
import { getStorage, setStorage, storageKey } from "../utils/storage";

export default function useTodos() {
  const [todos, setTodos] = useState(getStorage(storageKey, []));

  const lastId = useRef(
    todos.length === 0 ? 0 : Math.max(...todos.map((item) => item.id)) + 1,
  );

  useEffect(() => {
    setStorage(storageKey, todos);
  }, [todos]);

  const addTodo = (value) => {
    const newTodo = { id: lastId.current++, value, completed: false };
    const newTodos = [...todos, newTodo];

    setTodos(newTodos);
  };

  const removeTodo = (selectedId) => {
    const newTodos = todos.filter((todo) => selectedId !== todo.id);
    setTodos(newTodos);
  };

  const checkTodo = (checkedId) => {
    const newTodos = todos.map((todo) =>
      checkedId === todo.id ? { ...todo, completed: !todo.completed } : todo,
    );

    setTodos(newTodos);
  };

  return { todos, addTodo, removeTodo, checkTodo };
}
