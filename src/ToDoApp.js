import { useState, useEffect } from "react";
import ToDoForm from "./ToDoForm";
import ToDoList from "./ToDoList";

import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Grid from "@mui/material/Grid";

import { v4 as uuidv4 } from 'uuid';


function ToDoApp() {
    const initialTodos = JSON.parse(window.localStorage.getItem('todos') || "[]");
    // const initialTodos = [
    //     { id: 1, task: 'Pasear al Momo', completed: true },
    //     { id: 2, task: 'Lavar ropa', completed: false },
    //     { id: 3, task: 'Comprar papitas', completed: false }
    // ];
    const [todos, setTodos] = useState(initialTodos);

    useEffect(() => {
        // Saving to Local Storage: 
        window.localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos])

    const addTodo = newTodoText => {
        setTodos([...todos, { id: uuidv4(), task: newTodoText, completed: false }])
    };
    const removeTodo = todoId => {
        // filter out removed todo
        const updatedTodos = todos.filter(todo => todo.id !== todoId);
        // call setTodos with new todos array
        setTodos(updatedTodos);
    }
    const toggleTodo = todoId => {
        const updatedTodos = todos.map(todo =>
            todo.id === todoId ? { ...todo, completed: !todo.completed } : todo
        );
        setTodos(updatedTodos);
    };
    const editTodo = (todoId, newTask) => {
        const updatedTodos = todos.map(todo =>
            todo.id === todoId ? { ...todo, task: newTask } : todo
        );
        setTodos(updatedTodos);
    }

    return (
        <Paper
            style={{
                padding: 0,
                margin: 0,
                height: '100vh',
                backgroundColor: '#fafafa'
            }}
            elevation={0}
        >
            <AppBar
                color='primary'
                position='static'
                style={{
                    height: '64px'
                }}
            >
                <Toolbar>
                    <Typography color='inherit'>
                        TO-DOS WITH HOOKS  
                    </Typography>
                </Toolbar>
            </AppBar>
            <Grid container justifyContent='center' style={{marginTop: '1rem'}}>
                <Grid item xs={11} md={8} lf={4}>
                    <ToDoForm addTodo={addTodo}/>
                    <ToDoList
                        todos={todos}
                        removeTodo={removeTodo}
                        toggleTodo={toggleTodo}
                        editTodo={editTodo}
                    />
                </Grid>
            </Grid>
        </Paper>
    )
}

export default ToDoApp;