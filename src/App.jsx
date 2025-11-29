import { useState, useEffect } from "react";
import TaskList from "./components/TasksList";
import "./App.css";

export default function App() {
    let [todoItems, setTodoItems] = useState(() => {
        const saved = localStorage.getItem("todoItems");
        return saved ? JSON.parse(saved) : [];
    });

    useEffect(() => {
        localStorage.setItem("todoItems", JSON.stringify(todoItems));
    }, [todoItems]);

    function deleteTodoItem(id) {
        setTodoItems([...todoItems].filter((item) => item.id != id));
    }

    function editTodoItem(id) {
        setTodoItems([...todoItems].filter((item) => item.id != id));
    }

    function handleNewTodo(formData) {
        const todoText = formData.get("query");
        if (todoText) {
            setTodoItems(prevTodoItems =>
                ([...prevTodoItems, {id: prevTodoItems.length+1, text: todoText, checked: false} ])
            );
        }
    }

    function handleCheck(id) {
        setTodoItems(prevTodoItems =>
            prevTodoItems.map((item) => 
                item.id === id ? {...item, checked: !item.checked} : item
            )
        );
    }

    return (
        <main className="appContainer">
        <h1>Todo List</h1>
        <form action={handleNewTodo}>
            <input name="query" type="text" placeholder="Do the dishes" />
            <button className="addBtn">Add</button>
        </form>
        <TaskList
            todoItems={todoItems}
            handleCheck={handleCheck}
            deleteTodoItem={deleteTodoItem}
        />
        </main>
    );
}