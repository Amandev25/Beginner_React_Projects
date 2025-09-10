import React, { useState } from 'react';
import './style.css';

const Todo = () => {
    // Renamed 'Todo' to 'todos' for clarity and to follow conventions
    const [todos, setTodos] = useState([]);
    const [inputData, setInputData] =  useState("");

    const addTodo = () => {
        // 1. Prevents adding empty todos
        if (!inputData.trim()) return;

        const newTodo = {
            text: inputData,
            // 2. Use a more reliable way to generate a unique ID
            id: Date.now(),
        };

        setTodos(prevTodos => [...prevTodos, newTodo]);

        // 3. Clear the input field *after* submitting the todo
        setInputData("");
    };

    const deleteTodo = (idToDelete) => {
        setTodos(prevTodos => prevTodos.filter(todo => todo.id !== idToDelete));
    };

    return (
        <div className='container'>
            <input
                type="text"
                placeholder='New Todo..'
                value={inputData}
                onChange={({ target }) => setInputData(target.value)}
            />
            <button onClick={addTodo}>Submit</button>

            <ul className='todos-list'>
                {/* Map over the 'todos' state variable */}
                {todos.map(({ text, id }) => (
                    <li key={id} className='todo'>
                        {text}
                        {/* 4. Call the dedicated delete function */}
                        <button className='close' onClick={() => deleteTodo(id)}>X</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Todo;