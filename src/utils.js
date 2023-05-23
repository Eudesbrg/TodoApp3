const url = ""

export const fetchTodo = (token, setTodos) => {
  if (!token) return;
  fetch(url, {
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
  fetch(url, {
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
  fetch(url, {
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
  fetch(url, {
    method: "PUT",
    headers: {
      Authorization: `Bearer ${token}`,
      "content-type": "application/json",
    },
    body: JSON.stringify(data),
  });
};
