import { useState } from "react";

export default function Todo({ todo, onUpdateTodo, onDeleteTodo }) {
  const [isEditing, setEditing] = useState(false);
  const [message, setMessage] = useState(todo.message);

  // edit click
  function handleEditClick() {
    setEditing(true);
  }

  // save click
  function handleSaveClick() {
    onUpdateTodo({ id: todo.id, message: message });
    setEditing(false);
  }

  // delete click
  function handleDeleteClick() {
    onDeleteTodo(todo.id);
  }

  return (
    <li>
      <div className="todo">
        {isEditing ? (
          <input onChange={(e) => setMessage(e.target.value)} value={message} />
        ) : (
          <p>{todo.message}</p>
        )}
        <div className="opt">
          {isEditing ? (
            <button onClick={handleSaveClick}>save</button>
          ) : (
            <button onClick={handleEditClick}>edit</button>
          )}
          <button onClick={handleDeleteClick}>delete</button>
        </div>
      </div>
    </li>
  );
}
