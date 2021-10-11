import EditToDoForm from "./EditToDoForm";
import useToggle from "./hooks/useToggle";

// MUI components import
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";
import ListItemSecondaryAction from "@mui/material/ListItemSecondaryAction";

// MUI icons
import Delete from "@mui/icons-material/Delete";
import Edit from "@mui/icons-material/Edit";


function ToDoItem({ task, id, completed, removeTodo, toggleTodo, editTodo }) {
    const [isEditing, toggle] = useToggle(false);
    return (
        <ListItem style={{height: "64px"}}>
            {isEditing
                ? <EditToDoForm editTodo={editTodo} id={id} task={task} toggleEditForm={toggle}/>
                : <>
                    <Checkbox tabIndex={-1} checked={completed} onClick={() => toggleTodo(id)}/>     
                    <ListItemText style={{textDecoration: completed ? "line-through" : "none"}}>
                        {task}
                    </ListItemText>
                    <ListItemSecondaryAction>
                        <IconButton aria-label="Edit" onClick={toggle}>
                            <Edit/>
                        </IconButton>
                        <IconButton aria-label="Delete" onClick={() => removeTodo(id)}>
                            <Delete/>
                        </IconButton>
                    </ListItemSecondaryAction>
                </>
            }
        </ListItem>
    );
}

export default ToDoItem;