import { useState } from "react";
import ToDoForm from "./ToDoForm";
import ToDoList from "./ToDoList";

import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Grid from "@mui/material/Grid";


function ToDoApp() {
    const initialTodos = [
        { id: 1, task: 'Pasear al Momo', completed: true },
        { id: 2, task: 'Lavar ropa', completed: false },
        { id: 3, task: 'Comprar papitas', completed: false }
    ];
    const [todos, setTodos] = useState(initialTodos);
    const addTodo = newTodoText => {
        setTodos([...todos, { id: 4, task: newTodoText, completed: false }])
    };
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
            <ToDoForm addTodo={addTodo}/>
            <ToDoList todos={todos} />
        </Paper>
    )
}

export default ToDoApp;