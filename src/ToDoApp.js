import useTodoState from "./hooks/useTodoState";

import ToDoForm from "./ToDoForm";
import ToDoList from "./ToDoList";

import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Grid from "@mui/material/Grid";


function ToDoApp() {
    const initialTodos = [{id: 1, task: "Esto es un ejemplo", completed: false }];
    const { todos, addTodo, removeTodo, toggleTodo, editTodo } = useTodoState(initialTodos);

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
                style={{ height: '64px' }}
            >
                <Toolbar>
                    <Typography color='inherit'>
                        TO-DOS WITH HOOKS 📄   
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