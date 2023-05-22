import "./App.css";
import { useEffect, useState } from "react";

import { AddTodo, deleteTodo, fetchTodo, updateTodo } from "./utils";

import { useUser, _kc } from "./context/userContext";

import Navbar from "./components/Navbar";
import Todo from "./components/Todo";
import InputTodo from "./components/InputTodo";

function App() {
  const [todos, setTodos] = useState([]);
  const [operation, setOperation] = useState(false);
  const user = useUser();

  useEffect(() => {
    let ignore = false;
    // fetch data from the back api
    if (!ignore || operation) {
      fetchTodo(_kc.token, setTodos);
      setOperation(false);
    }

    return () => {
      ignore = true;
    };
  }, [operation]);

  useEffect(() => {
    let ignore = false;
    // fetch data from the back api
    if (!ignore && user) {
      fetchTodo(_kc.token, setTodos);
    }

    return () => {
      ignore = true;
    };
  }, [user]);

  // handle add todo task
  function handleAddTodo(message) {
    AddTodo(_kc.token, message);
    setOperation(true);
  }

  // handle edit todo task
  function handleEditTodo(currentTodo) {
    updateTodo(_kc.token, currentTodo.id, currentTodo.message);
    setOperation(true);
  }

  // handle delete todo task
  function handleDeleteTodo(todoId) {
    deleteTodo(_kc.token, todoId);
    setOperation(true);
  }

  return (
    <div className="app">
      <Navbar />
      <main style={user ? null : { justifyContent: "center" }}>
        {user ? (
          <>
            <InputTodo onAddTodo={handleAddTodo} />
            <ul className="todo-list">
              {todos.length
                ? todos.map((todo) => (
                    <Todo
                      key={todo.id}
                      onUpdateTodo={handleEditTodo}
                      onDeleteTodo={handleDeleteTodo}
                      todo={todo}
                    />
                  ))
                : null}
            </ul>
          </>
        ) : (
          <>
            <h1>You should login before access your list of task</h1>
            <h3>
              here the link to{" "}
              <a
                onClick={(e) => {
                  e.preventDefault();
                  _kc.login();
                }}
                href="/login"
              >
                login
              </a>
            </h3>
          </>
        )}
      </main>
      <footer>@Eudesbrg</footer>
    </div>
  );
}

export default App;
