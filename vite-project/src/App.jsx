import { useRef, useState } from "react";

function App() {
  const [todos, setTodos] = useState([
    { id: 1, value: "과제하기", completed: false },
    { id: 2, value: "공부하기", completed: false },
  ]);
  let lastId = useRef(todos.length + 1);

  const handleOnsubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    setTodos([
      ...todos,
      { id: lastId.current++, value: form.input.value, completed: false },
    ]);
    form.input.value = "";
  };

  const removeTodo = (selectedId) => {
    const filterTodos = todos.filter((todo) => selectedId != todo.id);
    setTodos(filterTodos);
  };

  const checkTodo = (checkedId) => {
    console.log(checkedId);
    const checkedTodos = todos.map((todo) =>
      checkedId == todo.id ? { ...todo, completed: !todo.completed } : todo,
    );
    setTodos(checkedTodos);
  };

  return (
    <>
      <form onSubmit={handleOnsubmit}>
        <input type="text" name="input" placeholder="할일을 입력하세요" />
        <button type="submit">입력</button>
      </form>
      <ul>
        {todos.map((todo) => (
          <li
            style={{ textDecoration: todo.completed ? "line-through" : "none" }}
            type="none"
            key={todo.id}
          >
            <input type="checkbox" onChange={() => checkTodo(todo.id)} />{" "}
            {todo.value}{" "}
            <button
              style={{
                backgroundColor: "transparent",
                border: "none",
                cursor: "pointer",
              }}
              onClick={() => removeTodo(todo.id)}
            >
              ❌
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
