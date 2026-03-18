import TodoList from "./components/TodoList";
import useTodos from "./hooks/useTodos";

function App() {
  const { todos, addTodo, removeTodo, checkTodo } = useTodos();

  const handleOnsubmit = (e) => {
    e.preventDefault();
    const value = e.target.input.value;

    if (!value.trim()) return;

    addTodo(value);
    e.target.input.value = "";
  };

  return (
    <>
      <form
        onSubmit={handleOnsubmit}
        style={{
          display: "flex",
          gap: "8px",
        }}
      >
        <input
          type="text"
          name="input"
          placeholder="할일을 입력하세요"
          style={{
            margin: "10px 20px",
            maxWidth: "250px",
            flex: 1,
            padding: "8px 12px",
            backgroundColor: "#f5f5f5",
            border: "none",
            borderRadius: "6px",
            outline: "none",
          }}
          onFocus={(e) => (e.target.style.backgroundColor = "#ffffff")}
          onBlur={(e) => (e.target.style.backgroundColor = "#f5f5f5")}
        />
        <button
          type="submit"
          style={{
            padding: "8px 12px",
            background: "none",
            border: "none",
            color: "#555",
            borderRadius: "6px",
            cursor: "pointer",
            transition: "0.2s",
          }}
          onMouseEnter={(e) => (e.target.style.backgroundColor = "#eaeaea")}
          onMouseLeave={(e) => (e.target.style.backgroundColor = "transparent")}
        >
          입력
        </button>
      </form>

      <TodoList todos={todos} removeTodo={removeTodo} checkTodo={checkTodo} />
    </>
  );
}

export default App;
