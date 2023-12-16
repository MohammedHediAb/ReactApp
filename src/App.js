import React, { useState, useEffect } from 'react';

const TodoList = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos');
        const data = await response.json();
        setTodos(data);
      } catch (error) {
        console.error('Erreur lors de la récupération des données : ', error);
      }
    };

    fetchData();
  }, []); 

  return (
    <div>
      <h1>Liste des tâches</h1>
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>
            {todo.title} - {todo.completed ? 'Terminé' : 'En cours'}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
