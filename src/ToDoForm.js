import useInputState from "./hooks/useInputState";

import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";

function ToDoForm({ addTodo }) {
    const [value, handleChange, reset] = useInputState("");
    return (
        <Paper>
            <form onSubmit={(e) => {
                e.preventDefault();
                addTodo(value);
                reset();
            }}>
            <TextField
                variant="standard"
                value={value}
                onChange={handleChange}
            />
            </form>
        </Paper>
    );
}

export default ToDoForm;