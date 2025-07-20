export default function TodoItem({ todo, toggleTodo , deleteTodo }) {
  return (
    <label className="block">
      <input
        type="checkbox"
        checked={todo.checked}
        onChange={() => {
          toggleTodo(todo.id);
        }}
        className=""
      />
      {todo.checked ? (
        <span className="line-through ml-2 text-2xl font-bold">
          {todo.text}
        </span>
      ) : (
        <span className="ml-2 text-2xl font-bold">{todo.text}</span>
      )}
      <button
        className="inline-flex w-5 h-5 ml-2 hover:cursor-pointer rounded-lg text-sm border border-black/10 justify-center items-center shrink-0"
        onClick={() => deleteTodo(todo.id)}
      >
        ❌
      </button>
    </label>
  );
}
