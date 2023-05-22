import { useState } from "react";

export default function InputTodo({ onAddTodo }) {
  const [todoTitle, setTodotitle] = useState("");

  // todo title handler
  function handleTodoTitle(e) {
    setTodotitle(e.target.value);
  }

  // add Click handler
  function handleAddClick() {
    onAddTodo(todoTitle);
    setTodotitle("");
  }

  return (
    <div>
      <input value={todoTitle} onChange={handleTodoTitle} />
      <button onClick={handleAddClick}>add</button>
    </div>
  );
}
