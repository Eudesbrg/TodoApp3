export const fetchTodo = (token, setTodos) => {
  if (!token) return;
  fetch("http://127.0.0.1:5000/todos/", {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
    .then((response) => response.json())
    .then((data) => setTodos(data))
    .catch((error) => console.error(error));
};

export const AddTodo = (token, message) => {
  const data = { message };
  fetch("http://127.0.0.1:5000/todos/", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "content-type": "application/json",
    },
    body: JSON.stringify(data),
  });
};

export const deleteTodo = (token, id) => {
  const data = { id };
  fetch("http://127.0.0.1:5000/todos/", {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${token}`,
      "content-type": "application/json",
    },
    body: JSON.stringify(data),
  });
};

export const updateTodo = (token, id, message) => {
  const data = { message, id };
  fetch("http://127.0.0.1:5000/todos/", {
    method: "PUT",
    headers: {
      Authorization: `Bearer ${token}`,
      "content-type": "application/json",
    },
    body: JSON.stringify(data),
  });
};
