import { getItem, setItem } from "./utils/storage.js";

const storageKey = "todos";

function App() {
  let todos = getItem(storageKey, []);
  let lastId =
    todos == null
      ? 0
      : Math.max(
          todos.map((item) => {
            item.id;
          }),
        ) + 1;

  const handleOnsubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const items = [
      ...todos,
      { id: lastId++, value: form.input.value, completed: false },
    ];
    setItem(storageKey, items);

    form.input.value = "";
  };

  const removeTodo = (selectedId) => {
    todos = getItem(storageKey, []);
    const filterTodos = todos.filter((todo) => selectedId != todo.id);
    setItem(storageKey, filterTodos);
  };

  const checkTodo = (checkedId) => {
    todos = getItem(storageKey, []);
    const checkedTodos = todos.map((todo) =>
      checkedId == todo.id ? { ...todo, completed: !todo.completed } : todo,
    );
    setItem(storageKey, checkedTodos);
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
            style={{
              textDecoration: todo.completed ? "line-through" : "none",
            }}
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
