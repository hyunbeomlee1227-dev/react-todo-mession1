import TodoItem from "./TodoItem";

function TodoList({ todos, removeTodo, checkTodo }) {
  return (
    <ul
      style={{
        listStyle: "none",
        padding: 0,
        marginTop: "12px",
        maxWidth: "300px",
        margin: "12px",
      }}
    >
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          removeTodo={removeTodo}
          checkTodo={checkTodo}
        />
      ))}
    </ul>
  );
}

export default TodoList;
