import useInputState from "./hooks/useInputState";

import TextField from "@mui/material/TextField";

function EditToDoForm({ id, task, editTodo, toggleEditForm }) {
    const [value, handleChange, reset] = useInputState(task);
    return (
        <form
            onSubmit={(e) => {
                e.preventDefault();
                editTodo(id, value);
                reset();
                toggleEditForm();
            }}
            style={{
                marginLeft: "1rem",
                width: "70%"
            }}
        >
            <TextField
                variant="standard"
                margin="normal"
                value={value}
                onChange={handleChange}
                fullWidth
                autoFocus
            />
        </form>
    );
}

export default EditToDoForm;