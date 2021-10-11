import ToDoItem from "./ToDoItem";

import Paper from "@mui/material/Paper";
import List from "@mui/material/List";

import Divider from "@mui/material/Divider";

function ToDoList(todos, removeTodo, toggleTodo, editTodo) {
    if (todos.length) {
        return (
            <Paper>
                <List>
                    {todos.map((todo, i) =>
                        <>
                            <ToDoItem
                                id={todo.id}
                                task={todo.task}
                                key={todo.id}
                                completed={todo.completed}
                                removeTodo={removeTodo}
                                toggleTodo={toggleTodo}
                                editTodo={editTodo}
                            />
                            {i < todos.lenght - 1 ? <Divider /> : null}
                        </>
                    )}
                </List>
            </Paper>
        );
    }
    return null;
}



export default ToDoList;