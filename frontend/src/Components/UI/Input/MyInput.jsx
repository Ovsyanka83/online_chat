import React from 'react';
import { useState } from 'react';
import classes from "./MyInput.module.css"

const MyInput = ({ onChange }) => {
    const [username, setUsername] = useState('');
    console.log(username)

    const handleNameChange = (event) => {
        onChange(event.target.value)
    }
    return (
        <div className="input-group flex-nowrap margin_element_name">
            <input
                type="text"
                className="form-control"
                placeholder="Enter your name"
                aria-label="Имя пользователя"
                aria-describedby="addon-wrapping"
                value={username}

                onChange={handleNameChange}
            />
        </div>


    );
};

export default MyInput;