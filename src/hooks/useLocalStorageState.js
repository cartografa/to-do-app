import { useState, useEffect } from "react";

function UseLocalStorageState(key, defaultValue) {
    // make piece of state, base off of value in localstorage (or default)
    const [state, setState] = useState(() => {
        let value;
        try {
            value = JSON.parse(window.localStorage.getItem(key) || String(defaultValue))
        }
        catch (e) {
            value = defaultValue;
        }
        return value;
    });
    // use useEffect to update localstorage when state changes
    useEffect(() => {
        window.localStorage.setItem(key, JSON.stringify(state));
    }, [state]);
    return [state, setState];
}

export default UseLocalStorageState;