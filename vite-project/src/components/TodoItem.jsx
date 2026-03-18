function TodoItem({ todo, removeTodo, checkTodo }) {
  return (
    <li
      style={{
        display: "flex",
        alignItems: "center",
        gap: "8px",
        padding: "6px 8px",
        borderRadius: "6px",
        cursor: "pointer",
        textDecoration: todo.completed ? "line-through" : "none",
        listStyle: "none",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.backgroundColor = "#f2f2f2";
        e.currentTarget.querySelector("button").style.opacity = 1;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.backgroundColor = "transparent";
        e.currentTarget.querySelector("button").style.opacity = 0;
      }}
    >
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => checkTodo(todo.id)}
        style={{
          cursor: "pointer",
        }}
      />

      <span
        style={{
          flex: 1,
          color: "#333",
          textDecoration: todo.completed ? "line-through" : "none",
          opacity: todo.completed ? 0.5 : 1,
        }}
      >
        {todo.value}
      </span>

      <button
        style={{
          background: "none",
          border: "none",
          cursor: "pointer",
          opacity: 0,
          transition: "0.2s",
        }}
        onClick={() => removeTodo(todo.id)}
      >
        ❌
      </button>
    </li>
  );
}

export default TodoItem;
